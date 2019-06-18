import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import { Input, FormBtn, Btn } from "../components/Form";

import dbAPI from "../utils/dbAPI";
import googleAPI from "../utils/googleAPI";



class Books extends Component {
  state = {
    books: [],
    title: ""
  };


  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {

    dbAPI.getBooks()
      .then(res => { console.log(res)
        this.setState({ books: res.data, title: ""})}
        )
        .catch(err => console.log(err));
  };

  deleteBook(book) {
    let id = book._id;
    dbAPI.deleteBook(id)
      .then(res => {
        console.log(res);
        this.loadBooks();
      })
      .catch(err => console.log(err));
  }
  // saveBook(book) {

   
  //   dbAPI.saveBook({
  //     title: book.volumeInfo.title,
  //     authors: book.volumeInfo.authors,
  //     description: book.volumeInfo.description,
  //     image: book.volumeInfo.imageLinks.smallThumbnail,
  //     link: book.volumeInfo.infoLink
  //   })
  // };

  // handleSearch = event => {
  //   event.preventDefault();
  //   googleAPI.googleBook(this.state.title)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ books: res.data, title: "" })
  //       console.log(this.state.books.items.length)
  //     }
  //     )
  //     .catch(err => console.log(err));
  // }


  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (

      <div className="container">
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h3> Search for and Save Books of Interest</h3>
        </Jumbotron>
        <div>
          {this.state.books !== undefined || this.state.books.length ? (
            <div>
              {this.state.books.map((book, index) => (
                <div className="card mb-3" key={index}>
              
                <Card
                  key={book._id}
                  id={book._id}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image || "https://via.placeholder.com/150"}
                  link={book.link}
                />
                <Btn 
              onClick={() => this.deleteBook(book)}
              >
                Delete</Btn>
                </div>
              ))
              }
              
            </div>
          ) : (
              <h3>No results to display.</h3>
            )}
        </div>
      </div>

    )
  }
}


export default Books;
