import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

class SearchBar extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  updateQuery = query => {
    console.log("---->>>>>>", query);

    this.setState({ query: query.trim() });
    BooksAPI.search(query).then(sBooks => {
      console.log(sBooks);
      if (sBooks) {
        this.setState(state => ({ searchedBooks: sBooks }));
      } else {
        this.setState({ searchedBooks: [] });
      }
    });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { shelves } = this.props;
    const { query, searchedBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(book => (
              <Book key={book.id} book={book} bookShelves={shelves} onChangeBookShelf={() => {}} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBar;
