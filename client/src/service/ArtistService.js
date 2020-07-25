// import axios from "axios";

// export default class ArtistService {
//   constructor() {
//     this.service = axios.create({
//       baseURL: "http://localhost:5000/api/artists",
//       withCredentials: true,
//     });
//   }

//   getAllArtists = () => this.service.get("/getAllArtists");
//   getOneArtist = (id) => this.service.get(`/getOneArtist/${id}`);
//   editArtist = (id, artist) => {
//     console.log(id, artist);
//     return this.service.put(`/edit/${id}`, artist);
//   };
// }

import axios from "axios";

export default class ArtistService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api/artists',
      withCredentials: true,
    });
  }

  getAllArtists = () => this.service.get("/getAllArtists");
  getOneArtist = (id) => this.service.get(`/getOneArtist/${id}`);
  editArtist = (id, artist) => {
    console.log(id, artist);
    return this.service.put(`/edit/${id}`, artist);
  };
}





