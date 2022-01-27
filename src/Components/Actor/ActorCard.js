import React from "react";
import { Card } from "react-bootstrap";

const ActorCard = ({ id, name, deathday, image, country }) => {
  return (
    <>
      <div className="card_element col-sm-12 col-lg-3 p-3 col-md-4  col-12  ">
        <Card className="cardds">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name} </Card.Title>
            <Card.Text>
              {deathday ? ` birthday ${deathday}` : `Alive`}
            </Card.Text>
            <Card.Text>
              <span>Country {country ? `: ${country.name}` : `  unknown`}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ActorCard;
