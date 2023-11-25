import React, { useState } from 'react'
import '../css/filter.css'
import Results from './Results';


export default function Filter() {

  const [isAvailable, setIsAvailable] = useState("OUI");
  const [commune, setCommune] = useState("");
  const [parisArrondissement, setParisArrondissement] = useState([]);

  const getCommuneValue = (e) => {
    
    setCommune(e.target.value);
    
    if (e.target.value === "PARIS") {
      
      document.getElementById("paris-filter").style.visibility = "initial";
      
    } else {
      setParisArrondissement("")
      document.getElementById("paris-filter").style.visibility = "hidden";
      
    }
  }

  const getParisArrondissement = (e) => {

    setParisArrondissement(e.target.value)

  }

  const getAvailableInfo = (e) => {

    setIsAvailable(e.target.value)

  }
  
  return (

  <div>
    <div className='filter-container'>
      
      <div id='commune-filter'>

        <label htmlFor='commune-select'>Commune : </label>
        <select onChange={getCommuneValue} id='commune-select'>
          
          <option value="">--Veuillez choisir une commune--</option>
          <option value="PARIS">Paris</option>
          <option value="BAGNEUX">Bagneux</option>
          {/* <option value="BAGNOLET">Bagnolet</option> */}
          <option value="IVRY-SUR-SEINE">Ivry-Sur-Seine</option>
          <option value="NOGENT-SUR-MARNE">Nogent-Sur-Marne</option>
          <option value="PANTIN">Pantin</option>
          <option value="SAINT-DENIS">Saint-Denis</option>
          <option value="SAINT-MANDE">Saint-Mandé</option>
          <option value="SAINT-OUEN">Saint-Ouen</option>
          <option value="THIAIS">Thiais</option>
  
        </select>
      </div>

      <div id='paris-filter'>

        <label htmlFor='paris-select'>Arrondissement de Paris : </label>

        <select onChange={getParisArrondissement} id='paris-select'>
          
          <option value="">--Veuillez choisir un arrondissement--</option>
          <option value="%201ER%20ARRONDISSEMENT">Paris 1er arrondissement</option>
          <option value="%202EME%20ARRONDISSEMENT">Paris 2eme arrondissement</option>
          <option value="%203EME%20ARRONDISSEMENT">Paris 3eme arrondissement</option>
          <option value="%204EME%20ARRONDISSEMENT">Paris 4eme arrondissement</option>
          <option value="%205EME%20ARRONDISSEMENT">Paris 5eme arrondissement</option>
          <option value="%206EME%20ARRONDISSEMENT">Paris 6eme arrondissement</option>
          <option value="%207EME%20ARRONDISSEMENT">Paris 7eme arrondissement</option>
          <option value="%208EME%20ARRONDISSEMENT">Paris 8eme arrondissement</option>
          <option value="%209EME%20ARRONDISSEMENT">Paris 9eme arrondissement</option>
          <option value="%2010EME%20ARRONDISSEMENT">Paris 10eme arrondissement</option>
          <option value="%2011EME%20ARRONDISSEMENT">Paris 11eme arrondissement</option>
          <option value="%2012EME%20ARRONDISSEMENT">Paris 12eme arrondissement</option>
          <option value="%2013EME%20ARRONDISSEMENT">Paris 13eme arrondissement</option>
          <option value="%2014EME%20ARRONDISSEMENT">Paris 14eme arrondissement</option>
          <option value="%2015EME%20ARRONDISSEMENT">Paris 15eme arrondissement</option>
          <option value="%2016EME%20ARRONDISSEMENT">Paris 16eme arrondissement</option>
          <option value="%2017EME%20ARRONDISSEMENT">Paris 17eme arrondissement</option>
          <option value="%2018EME%20ARRONDISSEMENT">Paris 18eme arrondissement</option>
          <option value="%2019EME%20ARRONDISSEMENT">Paris 19eme arrondissement</option>
          <option value="%2020EME%20ARRONDISSEMENT">Paris 20eme arrondissement</option>

        </select>

      </div>

        <div id='available-filter'>
          <label htmlFor='dispo-select'>Disponibilité : </label>

          <select onChange={getAvailableInfo} id='dispo-select'>

            <option value='OUI'>Oui</option>
            <option value='NON'>Non</option>

          </select>

        </div>

      </div>

      <Results commune={commune} parisArrondissement={parisArrondissement} isAvailable={isAvailable}/>

    </div>
  )
}
