import { NavLink, useLocation, useParams } from 'react-router'
import './CountryDetails.css'
import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
const CountryDetails = () => {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();
  const [isDark] = useTheme();

  const countryDetailsData = (data) => {
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(', '),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(', '),
      borders: [],
    })

    if (!data.borders) {
        data.borders = []
    }

    Promise.all(data.borders.map((border) => {
      return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res) => res.json())
      .then(([borderCountry]) => borderCountry.name.common)}))
      .then((borders) => {
          setTimeout(() => setCountryData((preState) => ({...preState, borders})))
    })
  }

  useEffect(() => {
    if (location.state) {
      countryDetailsData(location.state);
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        countryDetailsData(data)
      })
      .catch((err) => {
        setNotFound(true)
      })
  }, [countryName])

  if(notFound) {
    return <div>Country Not Found</div>
  }

  return countryData === null ? (
    'loading...'
  ) : (
    <>
    <main className={`${isDark && 'dark'}`}>
      <div className="country-details-container">
        <NavLink className="back-button" onClick={() => history.back()}>
          <i className="icon-arrow-left"></i>&nbsp; Back
        </NavLink>
        <div className="country-details">
          <img src={countryData?.flag} alt={`${countryData?.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData?.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData?.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData?.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData?.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData?.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData?.capital?.join(', ') || ''}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData?.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData?.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData?.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp; {
                countryData?.borders.map((border) => <NavLink key={border} to={`/${border}`}>{border}</NavLink>)
              }
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default CountryDetails