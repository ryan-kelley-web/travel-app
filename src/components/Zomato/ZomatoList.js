import React, { useState, useEffect } from 'react';
import ZomatoRestaurant from './ZomatoRestaurant';

const ZomatoList = (props) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        console.log(props.lat, props.lon);
        if (props.lat && props.lon) {
            const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.lon}`;
            const key = `63aa16e122b660ef88f2d35d8d687993`;
            const header = { method: 'GET', headers: new Headers({ 'user-key': key }) };
            fetch(url, header)
                .then((res) => res.json())
                .then((data) => {
                    console.log('ZomatoL msg', data.nearby_restaurants);
                    setRestaurants(data.nearby_restaurants);
                });
        };
    }, [props.lat, props.lon]);

    return (
        <div>
            <h1>Great Eats Detected Nearby! Hope You're Hungry.</h1>
            <br />
            <h3>Which of these are you in the mood for?</h3>
            {console.log(restaurants)}
            {/* { restaurants.length > 0 ? <ZomatoRestaurant restaurants={restaurants} /> : null} */}
            <ZomatoRestaurant restaurants={restaurants} />


        </div>
    )
}

export default ZomatoList;

//ZomatoList.js = WorkoutIndex.js
//zomatoFetch() = fetchWorkouts() 
//zomato key: 63aa16e122b660ef88f2d35d8d687993
//e.g., req url is https://developers.zomato.com/api/v2.1/geocode?lat=39.77&lon=-86.09