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

  loadBooks(id) {
    googleAPI.googleBook(id)
      .then(res =>
        this.setState({ books: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

  saveBook(book) {

    let savedBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink
    }
    console.log(savedBook);
   
    dbAPI.saveBook(savedBook).then(res => console.log(res));
  };

  handleSearch = event => {
    event.preventDefault();
    googleAPI.googleBook(this.state.title)
      .then(res => {
        console.log(res);
        this.setState({ books: res.data, title: "" })
        console.log(this.state.books.items.length)
      }
      )
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
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
        <div className="input-group mb-3">
          <Input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Search by Book Title...."
          />
          <FormBtn
            onClick={this.handleSearch}
          >
            Search

          </FormBtn>
        </div>
        <div>
          {this.state.books.items !== undefined || this.state.books.length ? (
            <div>
              {this.state.books.items.map((book, index) => (
                <div className="card mb-3">
              
                <Card
                  key={index}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.smallThumbnail || "https://via.placeholder.com/150"}
                  link={book.volumeInfo.infoLink}
                />
                <Btn 
              onClick={() => this.saveBook(book)}
              className={ "btn btn-success"}
              >
                Save</Btn>
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

