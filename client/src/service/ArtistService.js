// import axios from "axios";

// export default class CoasterService {
//   constructor() {
//     this.service = axios.create({
//       baseURL: "http://localhost:5000/api/artists",
//       withCredentials: true,
//     });
//   }

//   getAllCoasters = () => this.service.get("/getAllCoasters");
//   getOneCoaster = (id) => this.service.get(`/getOneCoaster/${id}`);
//   createCoaster = (coaster) => this.service.post(`/newCoaster`, coaster);
// }

import axios from "axios";

export default class ArtistService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/artists",
      withCredentials: true,
    });
  }

  getAllArtists = () => this.service.get("/getAllArtists");
  getOneArtist = (id) => this.service.get(`/getOneArtist/${id}`);
  editArtist = (artist) => this.service.post(`/edit/:id`, artist);
}
