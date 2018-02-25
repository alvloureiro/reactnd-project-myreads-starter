import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookShelves from "./components/BookShelves";

class BooksApp extends Component {
  state = {
    books: [],
    shelves: [
      {
        displayName: "Currently Reading",
        name: "currentlyReading"
      },
      {
        displayName: "Want to Read",
        name: "wantToRead"
      },
      {
        displayName: "Read",
        name: "read"
      }
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({ books });
    });
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({ books: state.books.concat(book) }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelves
              shelves={this.state.shelves}
              books={this.state.books}
              onChangeBookShelf={this.changeBookShelf}
            />
          )}
        />
        <Route path="/search" render={() => <SearchBar books={this.state.books} />} />
      </div>
    );
  }
}

export default BooksApp;
