import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./index.scss";
import {darkMode} from 'react'


// import "./lheader.scss";

const HomePage = () => {
  const [countriesData, setCountriesData]=useState([]);
  useEffect(()=>{
fetch(" https://restcountries.com/v2/all")
 .then((response)=>response.json())
 .then((data)=>setCountriesData(data))
},[])

//filterinput
const inputSearch=(element)=>{
  let filterInput=countriesData.filter((e)=>e.name.toLowerCase().includes(element.target.value.toLowerCase()))
setCountriesData(filterInput)
}

//filterselect
const selectSearch=(e)=>{
  
  let filterSelect=countriesData.filter((element)=>element.region.toUpperCase().includes(e.target.value.toUpperCase()))
setCountriesData(filterSelect)

}



  return (
    <div className='container'>
      <div className='inputselect' >
      <div style={{display:"flex", alignItems:"center"}}><input type="text"  placeholder='Search for a country...'  onChange={(element)=>inputSearch(element)}/><i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
      <select name="region" id="region" onChange={(e)=>selectSearch(e)} >
  <option value="filterbyregion">Filter by region</option>
  <option value="africa">Africa</option>
  <option value="america">America</option>
  <option value="asia">Asia</option>
  <option value="europe">Europe</option>
  <option value="oceania">Oceania</option>
</select>
      </div>
      
    </div>
     

        <div style={{display:"flex", flexWrap:"wrap",columnGap:"48px", rowGap:"55px", padding:"35px"}}>
        {countriesData.map((element)=>{
    return (
      <div key={element.id} className="cart">
        <img src={element.flags.png} style={{height:"260px", width:"280px"}}/>
        <h3>{element.name}</h3>
        <p>Population: {element.population}</p>
        <p>Region: {element.region}</p>
        <p>Capital: {element.capital}</p>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default HomePage
