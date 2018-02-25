import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";

class BooksApp extends Component {
  state = {
    showSearchPage: false,
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Home books={this.state.books} />} />
        <Route path="/search" render={({ history }) => <SearchBar />} />
      </div>
    );
  }
}

export default BooksApp;
