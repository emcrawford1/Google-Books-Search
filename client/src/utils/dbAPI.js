import axios from "axios";

export default {

  //Get all books from database
  getBooks: () => axios.get("api/books"),
  
  //Get book with specific id from database
  getBook: id => axios.get("/api/books/" + id),

  //Delete book with specific id from database
  deleteBook: id => axios.delete("/api/books/" + id),

  //Save book to database
  saveBook: bookData => axios.post("api/books", bookData)
}
