import React, { useState, useEffect } from 'react';
import './App.css';
import Nasa from './components/Nasa';
import OpenWeather from './components/OpenWeather';
import ZomatoList from './components/Zomato/ZomatoList';

// function GeoLoc() {

//   navigator.geolocation.getCurrentPosition(function (position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//   });
// }

function App() {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  function GeoLoc() {

    navigator.geolocation.getCurrentPosition(function (position) {

      setLat(position.coords.latitude);
      setLon(position.coords.longitude);

    });

  }

  useEffect(() => GeoLoc(), []);



  return (
    <div className="App">
      <ZomatoList lat={lat} lon={lon}/>
      <Nasa lat={lat} lon={lon}/>
      <OpenWeather lat={lat} lon={lon}/>
    
    </div>
  );
};




export default App;
