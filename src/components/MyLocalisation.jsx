import React, { createContext, useEffect, useState } from 'react'
import '../css/localisation.css'

export const LocaContext = createContext("")

export default function MyLocalisation({children}) {

    const [pos, getPos] = useState([])

    useEffect(() => {

        document.getElementById("geolocalisation-container").style.display = "flex";

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                document.getElementById("geolocalisation-container").style.display = "none";
                
                getPos({ lat_value: latitude,long_value: longitude })
    
                
            });
            
        } else {
            
            console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
            document.getElementById("geolocalisation-container").style.display = "flex";
            
        }
        
    }, [])
    
    
  return (
    
        <LocaContext.Provider value={pos}>
            {children}
            <div id='geolocalisation-container'>
                
                <div className='accept-localisation-box'>
                    <h2>Veuillez accepter votre localisation pour le fonctionnement du site</h2>
        
                </div>
        
            </div> 
        </LocaContext.Provider>

  )
}
