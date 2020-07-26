import React, { Component } from "react";
import "./index.css";

import ArtistService from "../../../service/ArtistService";
import UserForm from "../../pages/profile/User-form/index";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: undefined,
    };
    this.artistService = new ArtistService();
  }

  getUserData = () => {
    console.log(this.props.loggedInUser._id)
    this.artistService
      .getOneArtist(this.props.loggedInUser._id)
      .then((response) => this.setState({ profile: response.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount = () => this.getUserData();

  handleModal = (status) => this.setState({ showModal: status });

  handleArtistSubmit = () => {
    this.handleModal(false);
    this.getUserData();
  };

  render() {
    return (
      <>
        <h1 className="hello">Hello, {this.props.loggedInUser.username}.</h1>

        <Container as="main">
          <Row>
            <Col md={{ span: 5, offset: 0 }}>
              <img
                src={this.props.loggedInUser.imageUrl}
                alt="profile"
                className="imageProfile"
              ></img>
              <p>{this.props.loggedInUser.occupation}</p>
              <p>{this.props.loggedInUser.contactInfo}</p>
            </Col>
            <Col md={{ span: 5, offset: 6 }}>
              <hr></hr>
              <p>
                <b>About Me: </b>
                {this.props.loggedInUser.description}
              </p>
              <hr></hr>
              <p>
                <b>Favorites: </b>{" "}
              </p>
              <hr></hr>
              <Button
                onClick={() => this.handleModal(true)}
                variant="dark"
                size="sm"
                style={{ marginBottom: "20px" }}
              >
                Edit
              </Button>
              <hr></hr>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments:</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Link className="btn btn-dark btn-md linkBack" to="/artists">
                Go Back
              </Link>
            </Col>
            <Col md={{ span: 4, offset: 1 }}></Col>
          </Row>
        </Container>

        <Modal
          size="lg"
          show={this.state.showModal}
          onHide={() => this.handleModal(false)}
        >
          <Modal.Body>
            <UserForm
              handleArtistSubmit={this.handleArtistSubmit}
              profileData={this.state.profile}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Profile;
