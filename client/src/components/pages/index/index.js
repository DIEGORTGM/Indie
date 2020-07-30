import React from 'react'

import "./index.css";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Index = () => {

    return (
      <section className="header">
        <div className="logoHeader">
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