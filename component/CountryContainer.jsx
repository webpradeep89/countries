import CountryCard from "./CountryCard";
import React, { useEffect, useRef, useState } from "react";
import CountriesListShimmer from './CountriesListShimmer';

const CountryContainer = ({ searchQuery }) => {
  const [countriesData, setCountriesData] = useState([]);
  /* this code is start & reset timer */
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef(null);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  


/* this code is start & reset timer */

  /*const startTimer = () => {
    if (!isRunning) {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setCount((time) => {
                if (time > 0) return time - 1;
                setIsRunning(false);
                return 0;
            });
        }, 1000);
    }
  }

  const resetTimer = () => {
      clearInterval(intervalRef.current)
      setCount(10)
      setIsRunning(false);
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, []);
*/

if (!countriesData.length) {
  return <CountriesListShimmer />
}

  return (
    <>
    {/* {count}
    <button onClick={startTimer}>Click</button>
    <button onClick={resetTimer}>reset</button> */}
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchQuery) || country.region.toLowerCase().includes(searchQuery)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flags={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            );
          })}
      </div>
    </>
  );
};

export default CountryContainer;
