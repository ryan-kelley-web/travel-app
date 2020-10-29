import React, { useState, useEffect } from 'react';
import './App.css';
import Nasa from './components/Nasa';
import OpenWeather from './components/OpenWeather';
import ZomatoList from './components/Zomato/ZomatoList';


function GeoLoc() {

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
}
  


function App() {

GeoLoc();


  return (
    <div className="App">

    </div>
  );
}



export default App;
