import React, { Component } from "react";

import ArtistService from "../../../service/ArtistService";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class ArtistDetails extends Component {
  constructor() {
    super();
    this.state = {
      artistDetails: undefined,
    };
    this.artistService = new ArtistService();
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;

      console.log(id)

    this.artistService
      .getOneArtist(id)
      .then((response) => {
        console.log(response.data)
        return this.setState({ artistDetails: response.data })
      })
  
        .catch((err) => console.log(err));
    
  };

  render() {
    return !this.state.artistDetails ? (
      <h3>Loading...</h3>
    ) : (
      <Container as="main">
        <h1>{this.state.artistDetails.title}</h1>

          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <p>
                <b></b> {this.state.artistDetails.username}
              </p>
              <hr></hr>
              <img
                src={this.state.artistDetails.imageUrl}
                className="rounded"
                alt="profile"
                
              />
            </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <p>
                <b>Occupation:</b>
                <br></br>
                {this.state.artistDetails.occupation}
              </p>
              <hr></hr>
            <p>
                <b>About:</b>
                <br></br>
                {this.state.artistDetails.description}
            </p>
            <hr></hr>
            <Link className="btn btn-dark btn-md" to="/artists">
              Go Back
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArtistDetails;