import React, { Component } from "react";

import ArtistService from "../../../service/ArtistService";

import "./index.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import CommentService from "../../../service/CommentService";

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.loggedInUser,
      artistDetails: undefined,
    };
    this.artistService = new ArtistService();
    this.commentService = new CommentService();
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;

    this.artistService
      .getOneArtist(id)
      .then((response) => {
        console.log(response.data);
        return this.setState({ artistDetails: response.data });
      })

      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const artistId = this.props.match.params.id;

    this.commentService
      .createComment(this.state)
      .then((response) => {
        this.artistService
          .addComment(artistId, response.data)
          .then((response) => console.log(response.data));
      })
      .catch((err) => console.log(err));

    //this.artistService
    // .editArtist(id, this.state)
    //.then(() => this.props.handleArtistSubmit())
    //.catch((err) => console.log(err));
  };

  render() {
    console.log(this.state);
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
            <Link className="btn btn-dark btn-md detailButton" to="/artists">
              Go Back
            </Link>
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
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={this.handleInputChange}
                  name="text"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="commentButton">
                Comment
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArtistDetails;
