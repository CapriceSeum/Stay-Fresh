import React, { useEffect, useState } from 'react'



export default function SaintOuenAPI() {

  const [fountainDrinkData, setFountainDrinkData] = useState([]);


  const fetchAPI = "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=23&refine=commune%3ASAINT-OUEN"

  useEffect(() => {

      getCommuneData()  

  }, []);

  const getCommuneData = () => {

     fetch(fetchAPI)
      .then((res) => res.json())
      .then((data) => setFountainDrinkData(data.results))

  }

  return (
    
    <div className='display-cards'>

      {fountainDrinkData.map((data) => 
        <div className='display_fountain_card' id={data.gid}>
            <p>{data.commune}</p>  
            <p>Voie : {data.voie}</p>
            <p>Lat : {data.geo_point_2d.lat}</p>
            <p>Lat : {data.geo_point_2d.lon}</p>
            <p>Dispo : {data.dispo}</p>
        </div>
      )}
    </div>
  
  )
}
