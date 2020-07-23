// import React, { Component } from 'react'

// import CoasterService from '../../../service/CoasterService'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import { Link } from 'react-router-dom'

// class CoasterDetails extends Component {
//     constructor() {
//         super()
//         this.state = {
//             coasterDetails: undefined
//         }
//         this.coasterService = new CoasterService()
//     }

//     componentDidMount = () => {

//         const id = this.props.match.params.coaster_id

//         this.coasterService
//             .getOneCoaster(id)
//             .then(response => this.setState({ coasterDetails: response.data }))
//             .catch(err => console.log(err))
//     }

//     render() {

//         return (

//             !this.state.coasterDetails ? <h3>Loading...</h3> :

//                 <Container as="main">

//                     <h1>{this.state.coasterDetails.title}</h1>

//                     <Row>
//                         <Col md={{ span: 5, offset: 1 }}>
//                             <p><b>Detalles:</b> {this.state.coasterDetails.description}</p>
//                             <hr></hr>
//                             <p><b>Longitud:</b> {this.state.coasterDetails.length}</p>
//                             <p><b>Inversiones:</b> {this.state.coasterDetails.inversions}</p>
//                             <hr></hr>
//                             <Link className="btn btn-dark btn-md" to='/coasters'>Volver</Link>
//                         </Col>
//                         <Col md={{ span: 4, offset: 1 }}>
//                             <img src={this.state.coasterDetails.imageUrl} alt={this.state.coasterDetails.title} />
//                         </Col>
//                     </Row>

//                 </Container>
//         )
//     }
// }

// export default CoasterDetails

import React, { Component } from "react";

import ArtistService from "../../../service/ArtistService";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class ArtistDetails extends Component {
  constructor() {
    super();
    this.state = {
      artistDetails: undefined,
    };
    this.artistService = new ArtistService();
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;

      console.log(id)

    this.artistService
      .getOneArtist(id)
      .then((response) => {
        console.log(response.data)
        return this.setState({ artistDetails: response.data })
      })
  
        .catch((err) => console.log(err));
    
  };

  render() {
    return !this.state.artistDetails ? (
      <h3>Loading...</h3>
    ) : (
      <Container as="main">
        <h1>{this.state.artistDetails.title}</h1>

          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <p>
                <b></b> {this.state.artistDetails.username}
              </p>
              <hr></hr>
              <img
                src={this.state.artistDetails.imageUrl}
                className="rounded"
                alt="profile"
                
              />
            </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <p>
                <b>Occupation:</b>
                <br></br>
                {this.state.artistDetails.occupation}
              </p>
              <hr></hr>
            <p>
                <b>About:</b>
                <br></br>
                {this.state.artistDetails.description}
            </p>
            <hr></hr>
            <Link className="btn btn-dark btn-md" to="/coasters">
              Go Back
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArtistDetails;