import React, { useEffect, useState } from 'react'

export default function FountainDrinkAPI() {

    const [fountainDrinkData, setFountainDrinkData] = useState("");
    const fetchAPI = "https://parisdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=23&refine=commune%3A%22SAINT-OUEN%22"

    const loadData = () => {

        const result = fountainDrinkData.results;
        if (result) { 
            console.log(result[0].gid);
            console.log(result[0].gid);
        } else {
            console.error("No results or undefined data.");
        }


    }

    useEffect(() => {

        fetch(fetchAPI)
        .then((res) => res.json())
        .then((data) => setFountainDrinkData(data))

    }, [])
    


  return (
    <div>

        <h1>API FountainDrink</h1>
        <button onClick={loadData}>Load Data</button>

    </div>

  )
}
