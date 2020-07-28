import React from "react";

import "./index.css";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CommentCard = ({ text }) => {
  return (
    <Col md={4}>
      <Card border="dark" className="artist-card">
        <Card.Body>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CommentCard;
