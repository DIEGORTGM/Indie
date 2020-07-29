import React from "react";

import "./index.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CommentCard = (props) => {
  return (
    <Col md={4}>
      <Card border="dark" className="artist-card">
        <Card.Body>
          <Card.Title>{props.owner.username}</Card.Title>
          <hr></hr>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CommentCard;
