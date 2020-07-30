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
import Image from "react-bootstrap/Image";

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
            <Col >
              <Image 
                src={this.props.loggedInUser.imageUrl}
                alt="profile"
                className="imageProfile"
                roundedCircle
              ></Image>
              <p className="text-center">{this.props.loggedInUser.occupation}</p>
              <p className="text-center">{this.props.loggedInUser.contactInfo}</p>
            </Col>
            <Col>
              <p>
                <h5>About Me: </h5>
                <br></br>
                {this.props.loggedInUser.description}
              </p>
              <hr></hr>
              <p>
                <h5>Audio: </h5>{" "}
              </p>
              <Form.Group>
                <Form.Label>Audio (file)</Form.Label>
                <Form.Control
                  name="audioFile"
                  type="file"
                  onChange={this.handleFileUpload}
                />
              </Form.Group>

              <Button variant="light" type="submit" className="upload">
                Upload File
          </Button>
              
              <hr></hr>
              <Button
                onClick={() => this.handleModal(true)}
                variant="light"
                size="sm"
                style={{ marginBottom: "20px" }}
                className="editButton"
              >
                Edit
              </Button>
             
              <Form.Group controlId="exampleForm.ControlTextarea1" className="comments">
                <Form.Label>Comments:</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Link className="btn btn-light btn-md linkBack" to="/artists">
                Go Back
              </Link>
            </Col>
            {/* <Col md={{ span: 4, offset: 1 }}></Col> */}
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
