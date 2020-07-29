import axios from "axios";

export default class CommentService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/comments",
      withCredentials: true,
    });
  }

  createComment = (data) => {
    console.log(data);
    return this.service.post("/createComment", data);
  };
  getAllComments = (id) => this.service.get(`/getAllComments/${id}`);
}
