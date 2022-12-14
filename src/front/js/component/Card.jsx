import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

function CardP({ detail, id, type }) {
    // const [favorites, setFavorites] = useEffect([])
    const navigate = useNavigate();
    const {actions, store} = useContext(Context);

  return (
    <Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img className="imgCard" 
        variant="top" 
        src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${type == "people" ? id : (id+1)}.jpg`}
      />
      <Card.Body>
        <Card.Title>{detail.name}</Card.Title>
        <Card.Body>
          {actions.whichType(type) ? 
              <p className='cardText'><span className='texto'>Population:</span> {detail.population}<br/><span className='texto'>Terrain: </span>{detail.terrain}</p> 
               : <p className='cardText'><span className='texto'>Gender:</span> {detail.gender}<br/><span className='texto'>Hair Color:</span> {detail.hair_color}<br/><span className='texto'>Eye Color:</span> {detail.eye_color}</p>}
        </Card.Body>
        <Button className="me-md-5" variant="outline-warning" onClick={() => navigate(`/${type}/${id}`)}>
            Learn More!
        </Button>
        <div className="heart ms-md-5" variant="outline-warning" onClick={() => actions.manageFavorites(detail.name)}>
            {actions.isIn(store.favorites, detail.name) ? <i className='fas fa-heart'></i> : <i className='far fa-heart'></i>}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardP;
