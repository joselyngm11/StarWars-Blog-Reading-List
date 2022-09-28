import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../../img/img.png"

function CardP({ detail, id, type}) {
    const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img className="imgCard" variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{detail.name}</Card.Title>
        <Card.Text>
          Height: {detail.height}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/${type}/${id}`)}>
            Learn More!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardP;