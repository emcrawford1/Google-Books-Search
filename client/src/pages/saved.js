import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import { Btn } from "../components/Form";

import dbAPI from "../utils/dbAPI";



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
              className={ "btn btn-danger"}
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
