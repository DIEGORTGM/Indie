// import React from 'react'

// const Profile = props => {

//     return (
//         props.loggedInUser && <h1>¡Hola, {props.loggedInUser.username}!</h1>
//     )}

// export default Profile

// V.2 //

// import React from 'react'
// import './index.css'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form'

// import { Link } from 'react-router-dom'

// const Profile = props => {

//     return (
//       <>
//         <h1 className="hello">Hello, {props.loggedInUser.username}.</h1>

//         <Container as="main">
//           <Row>
//             <Col md={{ span: 5, offset: 0 }}>
//               <p>Profile Picture:</p>
//             </Col>
//             <Col md={{ span: 5, offset: 5 }}>
//               <p>
//                 <b>Occupation:</b>{" "}
//               </p>
//               <hr></hr>
//               <Form.Group controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>About Me:</Form.Label>
//                 <Form.Control as="textarea" rows="3" />
//               </Form.Group>
//               <hr></hr>

//               <hr></hr>
//               <p>
//                 <b>Contact Info:</b>{" "}
//               </p>
//               <hr></hr>
//               <p>
//                 <b>Favorites:</b>{" "}
//               </p>
//               <hr></hr>
//               <Link className="btn btn-dark btn-md" to="/coasters">
//                 Go Back
//               </Link>
//             </Col>
//             <Col md={{ span: 4, offset: 1 }}></Col>
//           </Row>
//         </Container>

//       </>
//     );
// }

// export default Profile

// V.3 //

import React, { Component } from "react";
import "./index.css";

import ArtistService from "../../../service/ArtistService";
import ArtistForm from "../../pages/profile/User-form/index";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: undefined,
    };
    this.artistService = new ArtistService();
    console.log("constructor");
  }

  getUserData = () => {
    this.artistService
      .getOneArtist(this.props.loggedInUser.id)
      .then((response) => this.setState({ profile: response.data }))
      .catch((err) => console.log(err));
  };

  updateUserData = () => {
    this.artistService
      .editArtist(this.props.loggedInUser.id)
      .then((response) => this.setState({ profile: response.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount = () => this.getUserData();

  handleModal = (status) => this.setState({ showModal: status });

  handleArtistSubmit = () => {
    this.handleModal(false);
    this.updateUserData();
    this.getUserData();
  };

  render() {
    console.log("render");
    return (
      <>
        <h1 className="hello">Hello, {this.props.loggedInUser.username}.</h1>

        <Container as="main">
          <Row>
            <Col md={{ span: 5, offset: 0 }}>
              {this.props.loggedInUser.imageUrl}
            </Col>
            <Col md={{ span: 5, offset: 5 }}>
              <p>
                <b>Occupation:  </b>
                {this.props.loggedInUser.occupation}
              </p>
              <hr></hr>
              <p>
                <b>About Me:  </b>
                {this.props.loggedInUser.description}
              </p>
              {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>About Me:  </Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group> */}

              <hr></hr>
              <p>
                <b>Contact Info:  </b>
                {this.props.loggedInUser.contactInfo}
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
              <Link className="btn btn-dark btn-md linkBack" to="/coasters">
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
            <ArtistForm handleArtistSubmit={this.handleArtistSubmit} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Profile;
