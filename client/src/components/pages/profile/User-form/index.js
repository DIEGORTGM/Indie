import React, { Component } from "react";

import ArtistService from "../../../../service/ArtistService";
import FilesService from "../../../../service/FilesService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.profileData.username,
      occupation: this.props.profileData.occupation,
      description: this.props.profileData.description,
      contactInfo: this.props.profileData.contactInfo,
    };
    this.artistService = new ArtistService();
    this.filesService = new FilesService();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const id = this.props.profileData._id;
    console.log(id, this.state);
    this.artistService
      .editArtist(id, this.state)
      .then(() => this.props.handleArtistSubmit())
      .catch((err) => console.log(err));
  };

  // CLOUDINARYCONFIG
  handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    this.filesService
      .handleUpload(uploadData)
      .then((response) => {
        console.log(
          "File uploaded! The Cloudinary URL is: ",
          response.data.secure_url
        );
        this.setState({ imageUrl: response.data.secure_url });
      })
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
              placeholder={this.state.username}
              className="text-muted"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Occuaption</Form.Label>
            <Form.Control
              as="select"
              onChange={this.handleInputChange}
              value={this.state.occupation}
              name="occuaption"
              type="text"
              placeholder={this.state.occupation}
            >
              <option>Options:</option>
              <option>Singer/Songwriter</option>
              <option>Producer</option>
              <option>DJ</option>
              <option>Instrumentalist</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.contactInfo}
              name="contactInfo"
              type="text"
              placeholder={this.state.contactInfo}
              className="text-muted"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About Me</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.description}
              name="description"
              type="text"
              placeholder={this.state.description}
              as="textarea"
              rows="3"
              className="text-muted"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image (file)</Form.Label>
            <Form.Control
              name="imageUrl"
              type="file"
              onChange={this.handleFileUpload}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Upload File
          </Button>

          <br></br>

          <Form.Group>
            <Form.Label>Audio (file)</Form.Label>
            <Form.Control
              name="audioFile"
              type="file"
              onChange={this.handleFileUpload}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Upload File
          </Button>

          <Button variant="dark" type="submit">
            Submit Changes
          </Button>
        </Form>
      </>
    );
  }
}

export default UserForm;
