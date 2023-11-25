import React, { useEffect, useState } from 'react'
import { LocaContext } from './MyLocalisation';


export default function Results({commune, parisArrondissement, isAvailable}) {
  
    const position = React.useContext(LocaContext)

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
            {getDistanceFromLatLonInKm(position.lat_value, position.long_value, data.geo_point_2d.lat, data.geo_point_2d.lon)}
            <p>Voie: {data.voie}</p>
            <p>Dispo: {data.dispo}</p>
          </div>
        ))
      )
    }
    
    </div>
  )
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = (R * c).toFixed(2); // Distance in km
  return (d + " km");
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}