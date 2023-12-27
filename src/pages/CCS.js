import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';

const CCS = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const countriesData = Country.getAllCountries();
    setCountries(countriesData);
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);

    const statesData = State.getStatesOfCountry(countryCode);
    setStates(statesData);
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);


    const citiesData = City.getCitiesOfState(selectedCountry, stateCode);
    setCities(citiesData);
  };

  return (
    <div className="row g-3 p-3">
      <div className="col-md-3">
        <label className="form-label">Country</label>
        <select
          id="country"
          className="form-select"
          name="country"
          onChange={handleCountryChange}
          value={selectedCountry}
          required
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">State</label>
        <select
          id="state"
          className="form-select"
          name="state"
          onChange={handleStateChange}
          value={selectedState}
          required
        >
          <option value="">Select a state</option>
          {states.map((state, index) => (
            <option key={index} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">City</label>
        <select id="city" className="form-select" name="city" required>
          <option value="">Select a city</option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CCS;
