import React, { useState, useEffect } from 'react';
import './App.css';
import Nasa from './components/Nasa';
import OpenWeather from './components/OpenWeather';
import ZomatoList from './components/Zomato/ZomatoList';

function App() {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

   function GeoLoc() {
    navigator.geolocation.getCurrentPosition( function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }

  useEffect( () =>   GeoLoc(), [] );

  // useEffect(() =>  {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLat(position.coords.latitude);
  //     setLon(position.coords.longitude);
  //   });
  // }, []);

  return (
    <div className="App">
      <br />
      <h1 class='title'>Travel App</h1>
      <br />
      <Nasa lat={lat} lon={lon} />
      <OpenWeather lat={lat} lon={lon} />
      <ZomatoList lat={lat} lon={lon} />
    </div>
  );
};


export default App;
