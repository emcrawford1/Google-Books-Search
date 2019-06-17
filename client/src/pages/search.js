import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import dbAPI from "../utils/dbAPI";
import googleAPI from "../utils/googleAPI";



class Books extends Component {
  state = {
    books: [],
    title: ""
  }
    ;

  loadBooks(id) {
    googleAPI.googleBook(id)
      .then(res =>
        this.setState({ books: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

  saveBook(book) {

    dbAPI.saveBook({
      title: book.title,
      authors: book.authors,
      description: book.description,
      image: book.image,
      link: book.link
    })
  };

  handleSearch(event) {
    event.preventDefault();
    googleAPI.googleBook(this.state.title)
      .then(res =>
        this.setState({ books: res.data, title: "" })
      )
      .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (

      <div className="container">
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h3> Search for and Save Books of Interest</h3>
        </Jumbotron>

        <div>
          {this.state.books.length ? (
            <div>
            {this.state.books.items.map((book, index) => (
                <Card
                  key={index}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  link={book.volumeInfo.infoLink}
                />
              ))
            }
            </div>
          ): (
            <h3>No results to display.</h3>
          )}
        </div>
      </div>

    )
  }
}


export default Books;

