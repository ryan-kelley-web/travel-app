import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const OpenWeather = (props) => {
    const [weather, setWeather] = useState( { main: {temp: ""}});
    const [units, setUnits] = useState('F');

    const toggleUnits = () => {
        setUnits(units=='F' ? 'C' : 'F');
    }

    useEffect(() => {
        console.log(props.lat, props.lon);
        if (props.lat && props.lon) {
        const key = `f54c7645a79d130ebfc7858644aaea07`;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${key}&units=imperial`;    
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setWeather(data);
           });
        };

    }, [props.lat, props.lon]);

    return (
        <div>
            <h1>Weather:</h1>
            <h3>The temperature right now is: {units == "F" ? weather.main.temp : (weather.main.temp - 32)*5/9} {units}</h3>
            <Button onClick={()=> toggleUnits()}>Fahrenheit / Celsius</Button>
        </div>
    )
}

export default OpenWeather;
            /* {console.log('lat:', props.lat)}
            {console.log('lon:', props.lon)} */