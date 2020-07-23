import React, { Component } from "react";
import ArtistService from "../../../../service/ArtistService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      occupation: "",
      description: "",
      contactInfo: "",
    };
    this.artistService = new ArtistService();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.artistService
      .editArtist(this.state)
      .then(() => this.props.handleArtistSubmit())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <h3>Edit Profile</h3>
        <hr></hr>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.username}
              name="username"
              type="text"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
              type="text"
            />
            <Form.Text className="text-muted">New password here.</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Occuaption</Form.Label>
            <Form.Control
              as="select"
              onChange={this.handleInputChange}
              value={this.state.occupation}
              name="occuaption"
              type="text"
            >
              <option>Options:</option>
              <option>Singer/Songwriter</option>
              <option>Producer</option>
              <option>DJ</option>
              <option>Instrumentalist (guitar, bass, drums, etc.)</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About Me</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.description}
              name="description"
              type="text"
              as="textarea"
              rows="3"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.contactInfo}
              name="contactInfo"
              type="text"
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit Changes
          </Button>
        </Form>
      </>
    );
  }
}

export default UserForm;
