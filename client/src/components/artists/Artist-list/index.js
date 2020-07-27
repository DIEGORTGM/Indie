// import React, { Component } from "react";
// import ArtistService from "../../../service/ArtistService";

// import ArtistCard from "./Artist-card";
// import ArtistForm from "../../pages/profile/User-form";
// import Spinner from "../../ui/Spinner";

// import "./Artist-list.css";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form"
// import FormControl from "react-bootstrap/FormControl"

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

//   handleArtistSubmit = () => {
//     this.handleModal(false);
//     this.updateArtistList();
//   };

//   render() {
//     return (
//       <>
//         <Container as="main" className="artist-page">
//           <h1>Our Independent Artists.</h1>

//           <Form inline>
//             <FormControl
//               type="text"
//               placeholder="Search Artists..."
//               className="mr-sm-2 search"
//             />
//             <Button variant="outline-dark" className="search">Search</Button>
//           </Form>
//           {/* <Button
//               onClick={() => this.handleModal(true)}
//               variant="dark"
//               size="sm"
//               style={{ marginBottom: "20px" }}
//             >
//               Search
//             </Button>  */}

//           {!this.state.artists ? (
//             <Spinner />
//           ) : (
//             <Row>
//               {this.state.artists.map((elm) => (
//                 <ArtistCard key={elm._id} {...elm} />
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

//SEARCH 1 //

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

  // dynamicSearch = () => {
  //   return this.state.artists.filter(artists => artists.includes(this.state.searchTerm.toLowerCase()))
  // }

  render() {
    console.log(this.state);
    return (
      <>
        <Container as="main" className="artist-page">
          <h1>Our Independent Artists.</h1>

          <Form inline onSubmit={this.handleFormSubmit}>
            <FormControl
              name="searchTerm"
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
              placeholder="Search Artists..."
              className="mr-sm-2 search"
            />
            <Button variant="dark" type="submit">
              Search
            </Button>
          </Form>

          {!this.state.artists ? (
            <Spinner />
          ) : (
            <Row>
              {this.state.artists.map((elm) => (
                <ArtistCard
                  key={elm._id}
                  {...elm}
                  // artists={this.dynamicSearch()}
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
