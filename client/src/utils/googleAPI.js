import axios from "axios";

export default {
  googleBook: id => axios.get("https://www.googleapis.com/books/v1/volumes?q=" + id)
}