import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";

class BooksApp extends React.Component {
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
        {this.state.showSearchPage ? <SearchBar /> : <Home books={this.state.books} />}
      </div>
    );
  }
}

export default BooksApp;
