import React, { useEffect, useState } from 'react'

export default function Results({commune, parisArrondissement, isAvailable}) {

    const [fountainDrinkData, setFountainDrinkData] = useState([]);
    
    useEffect(() => {

        const fetchAPI = `https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=100&refine=commune%3A${commune}${parisArrondissement}&refine=dispo%3A${isAvailable}`
        fetch(fetchAPI)
        .then((res) => res.json())
        .then((data) => setFountainDrinkData(data.results))
    
    }, [commune, parisArrondissement, isAvailable])

    
    
  return (

    <div className='display-cards'>

    {fountainDrinkData.length === 0 ? (
      <div>Nous avons trouvé aucun résultat....</div>
        ) : (
        fountainDrinkData.map((data) => (
          <div className='display_fountain_card' id={data.gid} key={data.gid}>
            <p>{data.commune}</p>  
            <p>{data.geo_point_2d.lon}</p>  
            <p>{data.geo_point_2d.lat}</p>   
            {/* Permet à l'avenir de calculer la distance entre l'utilisateur et le point d'eau proche */}
           
            <p>Voie: {data.voie}</p>
            <p>Dispo: {data.dispo}</p>
          </div>
        ))
      )
    }
    
    </div>
  )
}
