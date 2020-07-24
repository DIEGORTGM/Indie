import React, { Component } from "react";
import ArtistService from "../../../service/ArtistService";

import ArtistCard from "./Artist-card";
import ArtistForm from "../../pages/profile/User-form";
import Spinner from "../../ui/Spinner";

import "./Artist-list.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"

class ArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: undefined,
      showModal: false,
    };
    this.artistService = new ArtistService();
  }

  componentDidMount = () => this.updateArtistList();

  updateArtistList = () => {
    this.artistService
      .getAllArtists()
      .then((response) => this.setState({ artists: response.data }))
      .catch((err) => console.log(err));
  };

  handleModal = (status) => this.setState({ showModal: status });

  handleArtistSubmit = () => {
    this.handleModal(false);
    this.updateArtistList();
  };

  render() {
    return (
      <>
        <Container as="main" className="artist-page">
          <h1>Our Independent Artists.</h1>

            <Form>
              <FormControl type="text" placeholder="Search Independent Artists..." className="mr-md-2 search" />
              <Button variant="outline-dark" className="search">Search</Button>
            </Form>
           
            {/* <Button
              onClick={() => this.handleModal(true)}
              variant="dark"
              size="sm"
              style={{ marginBottom: "20px" }}
            >
              Search
            </Button> */}
          

          {!this.state.artists ? (
            <Spinner />
          ) : (
            <Row>
              {this.state.artists.map((elm) => (
                <ArtistCard key={elm._id} {...elm} />
              ))}
            </Row>
          )}
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

export default ArtistList;