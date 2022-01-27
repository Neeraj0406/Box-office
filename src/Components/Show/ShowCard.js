import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const ShowCard = ({ id, name, image, summary, onStarClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <>
      <div className="card_element col-lg-3 p-3 col-md-4 col-sm-6 ">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{summaryAsText}</Card.Text>

            <div className="link_star">
              <Link to={`/shows/${id}`}>Read more</Link>
              <Button
                variant="secondary"
                onClick={onStarClick}
                style={{ color: isStarred ? "yellow" : "grey" }}
              >
                <AiFillStar />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ShowCard;
