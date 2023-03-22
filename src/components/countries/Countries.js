import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './countries.css'
function Countries() {
  const [country,setCountry] = useState([])
  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => setCountry(data))
  } ,[])
  return (
    <div>
    <div className='headding'>
    <h1>All countries List</h1>
    </div>
      <div  className='country-containers'>
      {country.map(countries => <Country countries={countries} />)}
    </div>
    </div>
  );
}

export default Countries;