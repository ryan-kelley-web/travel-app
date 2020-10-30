import React, { useState, useEffect } from 'react';
// import styling from reactstrap? = CONFIRMED mods: wkt client, pg: getting started w wkts-2

const ZomatoList = (props) => {

    const [restaurants, setRestaurants] = useState([]);
    const key = '63aa16e122b660ef88f2d35d8d687993';
    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.lon}`;
    const header = { method: 'GET', headers: new Headers({ 'user-key': key }) };


    const zomatoFetch = () => { //not capitalized because not FC
        fetch(url, header)
            .then((res) => res.json())
            .then((data) => {
                setRestaurants(data)
                console.log(data);
            })
    };

    useEffect(() => zomatoFetch(), []);

    return (
        <div>
            <h1>Great Eats Detected Nearby!</h1>
            <h3>Hope You're Hungry!</h3>

            {/* {console.log('lat:', props.lat)}
            {console.log('lon:', props.lon)} */}
        </div>
    )
}

export default ZomatoList;


//ZomatoList.js = WktIndex.js
//zomatoFetch() = fetchWorkouts() 
//zomato key: 63aa16e122b660ef88f2d35d8d687993
//e.g., req url is https://developers.zomato.com/api/v2.1/geocode?lat=39.77&lon=-86.09