import React from 'react'

import ArtistCard from "../../artists/Artist-list/Artist-card";

import "./index.css";

import Col from "react-bootstrap/Col";

const Index = () => {

    return (
      <section className="header">
        <h1>Indie.</h1>
        <p>The best website for information on independent artists.</p>
        <br></br>
        <Col>
          <div className="d-flex justify-content-center">
            <h4>Our Artist of the Week.</h4>
            <br></br>
            <ArtistCard />
          </div>
        </Col>
      </section>
    );
}

export default Index