// import React, { Component } from "react";
// import CoasterService from "../../../service/CoasterService";

// import CoasterCard from "./Coaster-card";
// import CoasterForm from "./../Coaster-form";
// import Spinner from "../../ui/Spinner";

// import "./Coaster-list.css";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// class CoasterList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       coasters: undefined,
//       showModal: false,
//     };
//     this.coasterService = new CoasterService();
//   }

//   componentDidMount = () => this.updateCoasterList();

//   updateCoasterList = () => {
//     this.coasterService
//       .getAllCoasters()
//       .then((response) => this.setState({ coasters: response.data }))
//       .catch((err) => console.log(err));
//   };

//   handleModal = (status) => this.setState({ showModal: status });

//   handleCoasterSubmit = () => {
//     this.handleModal(false);
//     this.updateCoasterList();
//   };

//   render() {
//     return (
//       <>
//         <Container as="main" className="coasters-page">
//           <h1>Our Independent Artists.</h1>

//           {this.props.loggedInUser && (
//             <Button
//               onClick={() => this.handleModal(true)}
//               variant="dark"
//               size="sm"
//               style={{ marginBottom: "20px" }}
//             >
//               Search
//             </Button>
//           )}

//           {!this.state.coasters ? (
//             <Spinner />
//           ) : (
//             <Row>
//               {this.state.coasters.map((elm) => (
//                 <CoasterCard key={elm._id} {...elm} />
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
//             <CoasterForm handleCoasterSubmit={this.handleCoasterSubmit} />
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   }
// }

// export default CoasterList;





// V.2 //



// import React, { Component } from "react";
// import ArtistService from "../../../service/CoasterService";

// import CoasterCard from "./Coaster-card";
// import CoasterForm from "./../Coaster-form";
// import Spinner from "../../ui/Spinner";

// import "./Coaster-list.css";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// class ArtistList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       artists: undefined,
//       showModal: false,
//     };
//     this.artistService = new ArtistService();
//   }

//   componentDidMount = () => this.updateArtistList();

//   updateArtistList = () => {
//     this.artistService
//       .getAllArtists()
//       .then((response) => this.setState({ artists: response.data }))
//       .catch((err) => console.log(err));
//   };

//   handleModal = (status) => this.setState({ showModal: status });

//   handleCoasterSubmit = () => {
//     this.handleModal(false);
//     this.updateArtistList();
//   };

//   render() {
//     return (
//       <>
//         <Container as="main" className="coasters-page">
//           <h1>Our Independent Artists.</h1>

//           {this.props.loggedInUser && (
//             <Button
//               onClick={() => this.handleModal(true)}
//               variant="dark"
//               size="sm"
//               style={{ marginBottom: "20px" }}
//             >
//               Search
//             </Button>
//           )}

//           {!this.state.artists ? (
//             <Spinner />
//           ) : (
//             <Row>
//               {this.state.artists.map((elm) => (
//                 <CoasterCard key={elm._id} {...elm} />
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
//             <CoasterForm handleCoasterSubmit={this.handleCoasterSubmit} />
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   }
// }

// export default ArtistList;





// V.3 //


import React, { Component } from "react";
import ArtistService from "../../../service/CoasterService";

import CoasterCard from "./Coaster-card";
import CoasterForm from "./../Coaster-form";
import Spinner from "../../ui/Spinner";

import "./Coaster-list.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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

  handleCoasterSubmit = () => {
    this.handleModal(false);
    this.updateArtistList();
  };

  render() {
    return (
      <>
        <Container as="main" className="coasters-page">
          <h1>Our Independent Artists.</h1>

          {this.props.loggedInUser && (
            <Button
              onClick={() => this.handleModal(true)}
              variant="dark"
              size="sm"
              style={{ marginBottom: "20px" }}
            >
              Search
            </Button>
          )}

          {!this.state.artists ? (
            <Spinner />
          ) : (
            <Row>
              {this.state.artists.map((elm) => (
                <CoasterCard key={elm._id} {...elm} />
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
            <CoasterForm handleCoasterSubmit={this.handleCoasterSubmit} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ArtistList;