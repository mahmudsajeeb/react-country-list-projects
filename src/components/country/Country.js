import React from 'react'
import './country.css'
export default function Country(props) {
console.log(props)
  const {name,flags,capital,area,region} = props.countries
  return (
    <div className='country-container'>
       
      <img src={flags.png} alt="" />
      <h1>Country Name: <span>{name.common}</span> </h1>
      <h3>Capital: {capital}</h3>
      <h4>Region: {region}</h4>
      <p>Area: {area}</p>
       
    </div>
  )
}
