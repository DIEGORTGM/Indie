import React, { Component } from "react";

import ArtistService from "../../../service/ArtistService";

import "./index.css";

import CommentCard from "../../comments/comment.card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel"

import CommentService from "../../../service/CommentService";

import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.loggedInUser,
      artistDetails: undefined,
      comments: [],
    };
    this.artistService = new ArtistService();
    this.commentService = new CommentService();
  }

  componentDidMount = () => this.fetchArtistData();

  fetchArtistData = () => {
    const id = this.props.match.params.id;

    this.artistService
      .getOneArtist(id)
      .then((response) =>
        this.setState({ artistDetails: response.data }, () => {
          this.commentService
            .getAllComments(this.state.artistDetails._id)
            .then((response) => this.setState({ comments: response.data }))
            .catch((err) => console.log(err));
        })
      )

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
          .then(() => this.fetchArtistData())
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return !this.state.artistDetails ? (
      <h3>Loading...</h3>
    ) : (
      <Container as="main" className="mainContainer">
        <h1>{this.state.artistDetails.title}</h1>

        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <Link className="btn btn-light btn-md detailButton" to="/artists">
              Go Back
            </Link>
            <p>
              <b></b> {this.state.artistDetails.username}
            </p>
            <br></br>
            <img
              src={this.state.artistDetails.imageUrl}
              className="rounded detailsPic"
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
              <div className="audio">
                <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
              </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <div className="video">
                <h3 className="feat">Featured Video.</h3>
                <ReactPlayer url={this.state.artistDetails.video} />
                {this.state.artistDetails.videoName}
              </div>
            </Container>
          </Col>
          </Row>
        <Row>
          <h3 className="gallery">Gallery.</h3>
          <Carousel className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100 imageCar"
                src={this.state.artistDetails.carPicture[0]}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                  className="d-block w-100 imageCar"
                src={this.state.artistDetails.carPicture[1]}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                  className="d-block w-100 imageCar"
                src={this.state.artistDetails.carPicture[2]}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </Row>
          <Row>
            <Col>
              {this.state.comments &&
            this.state.comments.map((comment, idx) => (
              <CommentCard key={idx} {...comment} />
            ))}
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
              <Button variant="light" type="submit" className="commentButton">
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
