import React from "react";
import { Card, Button } from "react-bootstrap";
const Cards = ({
  title,
  name,
  emailAddress,
  description,
  gpa,
  salary,
  postedBy,
  button,
  onClick,
  footer,
}) => {
  return (
    <div className="cardContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {title && <Card.Title>{title}</Card.Title>}
          {name && <Card.Text> {name}</Card.Text>}
          {emailAddress && <Card.Text> {emailAddress}</Card.Text>}
          {description && <Card.Text> {description}</Card.Text>}
          {gpa && <Card.Text> {gpa} </Card.Text>}
          {salary && <Card.Text> {salary} </Card.Text>}
          {postedBy && <Card.Text> {postedBy} </Card.Text>}
          {button && (
            <Button variant="danger" onClick={onClick}>
              {button}
            </Button>
          )}
        </Card.Body>
        {footer && <Card.Footer className="footer">{footer}</Card.Footer>}
      </Card>
    </div>
  );
};

export default Cards;
