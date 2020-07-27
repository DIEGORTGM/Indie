import React from 'react'

// import ArtistCard from "../../artists/Artist-list/Artist-card";

import "./index.css";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Index = () => {

    return (
      <section className="header">
        <h1>Indie.</h1>
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
                <Link
                  to={`/getOneArtist/{5f195b257d343108d6ed503e}`}
                  className="btn btn-dark btn-block btn-sm"
                >
                  See Details.
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </section>
    );
}

export default Index