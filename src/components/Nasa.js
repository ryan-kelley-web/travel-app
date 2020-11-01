import React, {useState, useEffect} from 'react';
// import {Card, CardImg, CardBody, CardText} from 'reactstrap';

const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery?';
const key = 'mnwYfhf0SnptrqC5Dbjd5fso1QL26IzJKylLAZJL';

const Nasa = (props) => {
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        if(props.lat && props.lon){
            // Houston, TX coordinates
            // let url = `https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=${key}`;
            // Indianapolis, IN coordinates
            // let url = `https://api.nasa.gov/planetary/earth/imagery?lon=-86.16&lat=39.77&date=2018-01-01&dim=0.15&api_key=${key}`;
            console.log('Props lat:', props.lat);
            console.log('Props lon:', props.lon);
            let url = `${baseUrl}lon=${props.lon}&lat=${props.lat}&api_key=${key}`;
            console.log(url);
    
            fetch(url)
                // Checking what the response is returning (PNG)
                // .then(res => res.text())
                // .then(res => console.log(res))
                .then(res => res.blob())
                .then(blob => {
                    let imgSrc = URL.createObjectURL(blob);
                    setImgUrl(imgSrc);
                })
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <div>
            <img src={imgUrl} height='500px' width='500px' />
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

