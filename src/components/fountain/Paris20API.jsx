import React, { useEffect, useState } from 'react'

export default function Paris20API() {

  const [fountainDrinkData, setFountainDrinkData] = useState([]);
  const [fountainDrinkData2, setFountainDrinkData2] = useState([]);
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);

  const fetchAPI = "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=100&refine=commune%3APARIS%2020EME%20ARRONDISSEMENT"

  const fetch2API = "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=31&offset=100&refine=commune%3APARIS%2020EME%20ARRONDISSEMENT"

  useEffect(() => {

      getCommuneData()  

  }, []);


  const callResultData = () => {

      setResult(fountainDrinkData.results)
      setResult2(fountainDrinkData2.results)

  }

  const getCommuneData = () => {

     fetch(fetchAPI)
      .then((res) => res.json())
      .then((data) => setFountainDrinkData(data))

      fetch(fetch2API)
      .then((res) => res.json())
      .then((data) => setFountainDrinkData2(data))


  }

  return (
    
    <div>
    <button onClick={callResultData}>Oui</button>
    <div>Paris 20</div>
    
    {result.map((data) => 
      <div className='display_fountain'>
            <p>Partie 1</p>
          <p>Commune :{data.commune}</p>
          <p>GID : {data.gid}</p>
          <p>Voie :{data.voie}</p>
          <p>Lat : {data.geo_point_2d.lat}</p>
          <p>Lat : {data.geo_point_2d.lon}</p>
          <p>Dispo : {data.dispo}</p>
      </div>
  )} 

  {result2.map((data) => 
    <div className='display_fountain'>
            <p>Partie 2</p>

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





