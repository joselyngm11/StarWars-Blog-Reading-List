import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

function CardP({ detail, id, type }) {
    // const [favorites, setFavorites] = useEffect([])
    const navigate = useNavigate();
    const {actions, store} = useContext(Context);

    // const handleAdd = (name) => {
    //   let newArray = [...favorites]
    //     newArray.push(name)
    //     setFavorites(name)
    //     console.log(newArray)
    // }

  return (
    <Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img className="imgCard" 
        variant="top" 
        src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${type == "people" ? id : (id+1)}.jpg`}
      />
      <Card.Body>
        <Card.Title>{detail.name}</Card.Title>
        <Card.Text>
          Height: {detail.height}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/${type}/${id}`)}>
            Learn More!
        </Button>
        <Button variant="primary" onClick={() => actions.manageFavorites(detail.name)}>
            {actions.isIn(store.favorites, detail.name) ? <i className='fas fa-heart'></i> : <i className='far fa-heart'></i>}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardP;
