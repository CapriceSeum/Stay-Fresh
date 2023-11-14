import React, { useEffect, useState } from 'react'

export default function PantinAPI() {

  const [fountainDrinkData, setFountainDrinkData] = useState([]);

  const fetchAPI = "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=100&refine=commune%3APANTIN"

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
    <div>Pantin</div>
    
    {fountainDrinkData.map((data) => 
      <div className='display_fountain'>
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
