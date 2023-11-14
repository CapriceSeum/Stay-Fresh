import React, { useEffect, useState } from 'react'

export default function Paris15API() {

  const [fountainDrinkData, setFountainDrinkData] = useState([]);
  const [result, setResult] = useState([]);

  const fetchAPI = "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=100&refine=commune%3APARIS%2015EME%20ARRONDISSEMENT"

  useEffect(() => {

      getCommuneData()  

  }, []);


  const callResultData = () => {

      setResult(fountainDrinkData.results)

  }

  const getCommuneData = () => {

     fetch(fetchAPI)
      .then((res) => res.json())
      .then((data) => setFountainDrinkData(data))

  }

  return (
    
    <div>
    <button onClick={callResultData}>Oui</button>
    <div>Paris 15</div>
    
    {result.map((data) => 
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
