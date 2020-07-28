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
  editArtist = (id, artist) => this.service.put(`/edit/${id}`, artist);
  addComment = (id, data) => {
    console.log(data);
    return this.service.put(`/addComment/${id}`, data);
  };

  searchArtist = (searchTerm) => {
    console.log(searchTerm);
    return this.service.post("/search", searchTerm);
  };
}
