import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries,handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  // console.log(handleVisitedCountries);

  const handleVisited = () => {
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // alternative--
    // visited ? setVisited(false) : setVisited(true);

    // alternative--
    // setVisited(false);
    // visited || setVisited(true);

    // alternative--
    setVisited(!visited);

    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h4>Name : {country.name.common}</h4>
      <img style={{ height: "120", width: "200px" }} src={country.flags.png} alt="" />
      <p>Independent : {country.independent ? "Free" : "Not Free"}</p>
      {/* <p>Population : {country.population}</p> */}
      {/* <p>Area : {country.area}</p> */}
      {/* <p>Capital : {country.capital}</p> */}
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={()=> handleVisitedFlags(country.flags.png)}>Visited Flags</button>
    </div>
  );
};

export default Country;
