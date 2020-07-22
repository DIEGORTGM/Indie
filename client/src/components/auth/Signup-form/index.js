// import React, { Component } from "react";

// import AuthService from "../../../service/AuthService";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// class SignupForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//     this.authService = new AuthService();
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     this.authService
//       .signup(this.state)
//       .then((response) => {
//         this.props.setTheUser(response.data);
//         this.props.handleToast(true, "Registro completado");
//         this.props.history.push("/profile");
//       })
//       .catch((err) => console.log(err.response.data.message)); // Error handling yay!
//   };

//   render() {
//     return (
//       <Container as="main">
//         <Row>
//           <Col md={{ offset: 3, span: 6 }}>
//             <h3>Artist Registration</h3>

//             <hr></hr>

//             <Form onSubmit={this.handleFormSubmit}>
//               <Form.Group>
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control
//                   onChange={this.handleInputChange}
//                   value={this.state.username}
//                   name="username"
//                   type="text"
//                 />
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   onChange={this.handleInputChange}
//                   value={this.state.password}
//                   name="password"
//                   type="password"
//                 />
//                 <Form.Text className="text-muted">
//                   3 character minimum
//                 </Form.Text>
//               </Form.Group>

//               <Button variant="dark" type="submit">
//                 Register
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default SignupForm;

import React, { Component } from "react";

import AuthService from "../../../service/AuthService";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      occupation: "",
      contact: "",
      work: "",
    };
    this.authService = new AuthService();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.authService
      .signup(this.state)
      .then((response) => {
        this.props.setTheUser(response.data);
        this.props.handleToast(true, "Registro completado");
        this.props.history.push("/profile");
      })
      .catch((err) => console.log(err.response.data.message)); // Error handling yay!
  };

  render() {
    return (
      <Container as="main">
        <Row>
          <Col md={{ offset: 3, span: 6 }}>
            <h3>Artist Registration</h3>

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
                <Form.Text className="text-muted">
                  Preferably your artistic name
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  name="password"
                  type="password"
                />
                <Form.Text className="text-muted">
                  3 character minimum
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.contact}
                  name="contact"
                  type="text"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Occupation</Form.Label>
                <Form.Control as="select" onChange={this.handleInputChange}
                  value={this.state.occupation}
                  name="occupation"
                  type="text">
                  <option>Options:</option>
                  <option>Singer/Songwriter</option>
                  <option>Producer</option>
                  <option>DJ</option>
                  <option>Instrumentalist (guitar, bass, drums, etc.)</option>
                </Form.Control>
              </Form.Group>
              
              <Button variant="dark" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupForm;
