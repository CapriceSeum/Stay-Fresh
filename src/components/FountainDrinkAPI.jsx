import React, { useEffect, useState } from 'react'

export default function FountainDrinkAPI() {


    const [fountainDrinkData, setFountainDrinkData] = useState([]);
    const [result, setResult] = useState([]);

    const fetchAPI = "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=23&offset=1&refine=commune%3ASAINT-OUEN"

    useEffect(() => {

        getSaintOuenData()  

    }, []);


    const callSaintOuenData = () => {

        setResult(fountainDrinkData.results)

    }

    const getSaintOuenData = () => {

       fetch(fetchAPI)
        .then((res) => res.json())
        .then((data) => setFountainDrinkData(data))

    }

    return (
      
      <div>
      <button onClick={callSaintOuenData}>Oui</button>
      <div>Saint-Ouen</div>
      
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
