import React from 'react'

import "./index.css";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Index = () => {

    return (
      <section className="header">
        <div className="logoHeader">
        <img src='https://images.squarespace-cdn.com/content/v1/58dace4846c3c499690aded0/1490737428992-XSVQIKLFHPJB4W8K3T2S/ke17ZwdGBToddI8pDm48kL3VKmwKI3leYB51VJjLFB8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcQ643Xlia2-fGNGmT0Ni4GzSBWYegu4Na6KP29i9RHf4IJOBaNFWew0RIOS0ELFXu/vinyl-record-1-1024-768-descibel-radio-1TJlqv-clipart.png?format=1500w' alt="logo" className="logo"></img>
          <h1>Indie.</h1>
        </div>
        <p>The best website for information on independent artists.</p>
            <br></br>
            <br>
            </br>
        <Col className="artistWeek">
          <div >
            <h4 className="aristText">Our Artist of the Week.</h4>
            <Card border="dark" className="artist-card-index">
              <Card.Img
                variant="top"
                src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/YETKXMYEHFBCBM2XSHYM2QW4EY.jpg"
              />
              <Card.Body>
                <Card.Title>Mac Miller</Card.Title>
                <Card.Text>Singer/Songwriter</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </section>
    );
}

export default Index