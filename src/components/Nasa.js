import React, {useState, useEffect} from 'react';
// import {Card, CardImg, CardBody, CardText} from 'reactstrap';

const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery?';
const key = 'mnwYfhf0SnptrqC5Dbjd5fso1QL26IzJKylLAZJL';

const Nasa = () => {
    const [longitude, setLongitude] = useState(0.00);
    const [latitude, setLatitude] = useState(0.00);

    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                setLongitude(position.coords.longitude);
                setLatitude(position.coords.latitude);
            })
        }
    }, []);


    return (
        <div>
            {/* <Card>
                <CardImg />
                <CardBody>
                    <CardText></CardText>
                </CardBody>
            </Card> */}
        </div>
    );
};

export default Nasa;

// function GeoLoc() {

//     navigator.geolocation.getCurrentPosition(function (position) {
//       console.log("Latitude is :", position.coords.latitude);
//       console.log("Longitude is :", position.coords.longitude);
//     });
//   }