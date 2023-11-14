import React, { useEffect, useState } from 'react'

export default function SaintMandeAPI() {

  const [fountainDrinkData, setFountainDrinkData] = useState([]);

  const fetchAPI = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=100&refine=commune%3ASAINT-MANDE"

  useEffect(() => {

      getCommuneData()  

  }, []);



  const getCommuneData = () => {

     fetch(fetchAPI)
      .then((res) => res.json())
      .then((data) => setFountainDrinkData(data.results))

  }

  return (
    
    <div>
    <div>Saint Mande</div>
    
    {fountainDrinkData.map((data) => 
      <div className='display_fountain_card' id={data.gid}>
          <p>Commune :{data.commune}</p>
          <p>GID : {data.gid}</p>
          <p>Voie :{data.voie}</p>
          <p>Lat : {data.geo_point_2d.lat}</p>
          <p>Lat : {data.geo_point_2d.lon}</p>
          <p>Dispo : {data.dispo}</p>
      </div>
  )}
  </div>
  
  )
}
