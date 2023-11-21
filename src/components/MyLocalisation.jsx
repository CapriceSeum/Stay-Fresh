import React, { createContext, useEffect, useState } from 'react'
import '../css/localisation.css'

export const LocaContext = createContext

export default function MyLocalisation() {

    const [getLongitude, setGetLongitude] = useState("")
    const [getLatitude, setGetLatitude] = useState("")

    useEffect(() => {

        document.getElementById("geolocalisation-container").style.display = "flex";

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
        
                setGetLongitude(longitude)
                setGetLatitude(latitude)

                
                console.log("Latitude: " + getLatitude);
                console.log("Longitude: " + getLongitude);
                // Vous pouvez faire ce que vous voulez avec les données de latitude et de longitude ici

                document.getElementById("geolocalisation-container").style.display = "none";

            });

        } else {
            
            console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
            document.getElementById("geolocalisation-container").style.display = "flex";

        }

    },)




  return (
    

        <div id='geolocalisation-container'>
            
            <div className='accept-localisation-box'>
                <h2>Veuillez accepter votre localisation pour le fonctionnement du site</h2>

            </div>

        </div>

  )
}
