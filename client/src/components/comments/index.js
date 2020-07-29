// import React, { Component } from "react";
// import CommentService from "../../service/CommentService";

// import CommentCard from "./comment.card";

// import "./index.css";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Col from "react-bootstrap/esm/Col";

// class ArtistList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       comments: []
//     };
//     this.commentService = new CommentService();
//   }

//   componentDidMount = () => this.updateArtistList();

//   createComment = () => {
//     this.commentService
//       .createComment(id, )
//       .then((response) => this.setState({ comments: response.data }))
//       .catch((err) => console.log(err));
//   };

//   handleModal = (status) => this.setState({ showModal: status });

//   handleArtistSubmit = () => {
//     this.handleModal(false);
//     this.updateArtistList();
//   };

  

//   render() {
//     return (
//       <>
//         <Container as="main" className="artist-page">
//           <Row>
//             <Col>
//               <h2>Our Independent Artists.</h2>
//             </Col>
//             <Col className="searchBar">
//               <Form inline onSubmit={this.handleFormSubmit}>
//                 <FormControl
//                   name="searchTerm"
//                   type="text"
//                   value={this.state.searchTerm}
//                   onChange={this.handleInputChange}
//                   placeholder="Search Artists..."
//                   className="mr-sm-2 search"
//                 />
//                 <Button variant="dark" type="submit" className="searchButton">
//                   Search
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//           {!this.state.artists ? (
//             <Spinner />
//           ) : (
//             <Row>
//               {this.state.artists.map((elm) => (
//                 <ArtistCard
//                   key={elm._id}
//                   {...elm}
//                   // artists={this.dynamicSearch()}
//                 />
//               ))}
//             </Row>
//           )}
//         </Container>

//         <Modal
//           size="lg"
//           show={this.state.showModal}
//           onHide={() => this.handleModal(false)}
//         >
//           <Modal.Body>
//             <ArtistForm handleArtistSubmit={this.handleArtistSubmit} />
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   }
// }

// export default ArtistList;
