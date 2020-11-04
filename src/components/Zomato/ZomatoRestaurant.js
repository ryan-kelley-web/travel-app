import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ZomatoList from './ZomatoList';
import ZomatoItem from './ZomatoItem'; 

const ZomatoRestaurants = (props) => {

//cannot access name from fetch results

  return (
    <div>

      <Card>
        {console.log('ZomatoR msg', props)}
        {/* <CardImg top width="100%" src={props.nearby_restaurants[0].restaurant.photos_url} alt="Good Eats 1 of 3" /> */}
        <CardBody>
          <CardTitle>
          {/* <h1>   {props.restaurants.map( (r) => r.restaurant.name)}</h1>  */}
          { props.restaurants.map( (r, i) => <ZomatoItem restaurant={r.restaurant} key={i} myKey={i+1} /> ) }


          {/* //^^can create new compon/file, call it R of fat arrow using r.yadda x3, pass as prop r.restaurant */}
          {/* <h1>test!!!{props.name}</h1> */}
          </CardTitle> 
          {/*
          <CardSubtitle><p>Type of Cuisine:{props.restaurants.nearby_restaurants[0].restaurant.cuisines}</p></CardSubtitle>
          <CardText><p>Physical Location:{props.restaurants[0].nearby_restaurants[0].restaurant.location}</p></CardText>
          <Button><a href={props.restaurants[0].nearby_restaurants[0].restaurant.photos_url}>Tell 'em Sean, Lyndsay, and Ryan Sent Ya!</a></Button> */}
        </CardBody>
      </Card>

      {/* <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>RESTAURANT 2</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>RESTAURANT 3</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card> */}

    </div>
  );
};


export default ZomatoRestaurants;