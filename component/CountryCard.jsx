import { NavLink } from "react-router"

const CountryCard = (props) => {
  const {name, flags, population, region, capital, data} = props
  return (
    <>
    <NavLink className="card-container group relative" key={name} to={`/${name}`} state={data}>
      <div className="img-container">
        <img src={flags} alt={name} />
      </div>
        <div className="country-detail">
            <h3>{name}</h3>
            <p><span>Population:</span> {population}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
        </div>
    </NavLink>
    </>
  )
}

export default CountryCard