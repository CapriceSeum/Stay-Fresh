import React, { useState } from 'react'
import '../css/filter.css'

export default function Filter() {


  const getCommuneValue = (e) => {
  
    console.log(e.target.value)

      if (e.target.value === "Paris") {
        
        document.getElementById("paris-filter").style.visibility = "initial";

      } else {

        console.log("Non test")
        document.getElementById("paris-filter").style.visibility = "hidden";

      }

  }



  return (
    <div className='filter-container'>

      <div id='commune-filter'>

        <label for='commune-select'>Commune : </label>
        <select onChange={getCommuneValue} id='commune-select'>
          
          <option value="">--Veuillez choisir une commune--</option>
          <option value="Paris">Paris</option>
          <option value="Bagneux">Bagneux</option>
          <option value="Bagnolet">Bagnolet</option>
          <option value="Ivry-Sur-Seine">Ivry-Sur-Seine</option>
          <option value="Nogent-Sur-Marne">Nogent-Sur-Marne</option>
          <option value="Pantin">Pantin</option>
          <option value="Saint-Denis">Saint-Denis</option>
          <option value="Saint-Mandé">Saint-Mandé</option>
          <option value="Saint-Ouen">Saint-Ouen</option>
          <option value="Thiais">Thiais</option>
  
        </select>
      </div>

      <div id='paris-filter'>

        <label for='paris-select'>Disponibilité : </label>

        <select id='paris-select'>
          
          <option value="">--Choississez un arrondissement--</option>
          <option value="1">Paris 1er arrondissement</option>
          <option value="2">Paris 2eme arrondissement</option>
          <option value="3">Paris 3eme arrondissement</option>
          <option value="4">Paris 4eme arrondissement</option>
          <option value="5">Paris 5eme arrondissement</option>
          <option value="6">Paris 6eme arrondissement</option>
          <option value="7">Paris 7eme arrondissement</option>
          <option value="8">Paris 8eme arrondissement</option>
          <option value="9">Paris 9eme arrondissement</option>
          <option value="10">Paris 10eme arrondissement</option>
          <option value="11">Paris 11eme arrondissement</option>
          <option value="12">Paris 12eme arrondissement</option>
          <option value="13">Paris 13eme arrondissement</option>
          <option value="14">Paris 14eme arrondissement</option>
          <option value="15">Paris 15eme arrondissement</option>
          <option value="16">Paris 16eme arrondissement</option>
          <option value="17">Paris 17eme arrondissement</option>
          <option value="18">Paris 18eme arrondissement</option>
          <option value="19">Paris 19eme arrondissement</option>
          <option value="20">Paris 20eme arrondissement</option>

        </select>

      </div>

      <div id='available-filter'>
        <label for='dispo-select'>Disponibilité : </label>

        <select id='dispo-select'>

          <option value='yes'>Oui</option>
          <option value='no'>Non</option>

        </select>

      </div>

  </div>
  )
}
