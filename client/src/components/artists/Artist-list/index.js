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
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/esm/Col";

class ArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      showModal: false,
      searchTerm: "",
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

  // Search

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.artistService
      .searchArtist(this.state)
      .then((response) => {
        console.log(response.data);
        return this.setState({ artists: response.data });
      })
      .catch((err) => console.log(err.response.data.message)); // Error handling yay!
  };
  
  render() {
    console.log(this.state);
    return (
      <>
        <Container as="main" className="artist-page">
          <Row>
            <Col>
          <h2>Our Independent Artists.</h2>
            </Col>
            <Col className="searchBar">
          <Form inline onSubmit={this.handleFormSubmit}>
            <FormControl
              name="searchTerm"
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
              placeholder="Search Artists..."
              className="mr-sm-2 search"
            />
            <Button variant="light" type="submit" className="searchButton">
              Search
            </Button>
            </Form>
            </Col>
          </Row>
          {!this.state.artists ? (
            <Spinner />
          ) : (
            <Row>
              {this.state.artists.map((elm) => (
                <ArtistCard
                  key={elm._id}
                  {...elm}
                />
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
