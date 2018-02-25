import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Book from "./Book";

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, shelves, onChangeBookShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {shelves.map(shelf => (
            <div key={shelf.name} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.displayName}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(book => book.shelf === shelf.name)
                    .map(book => <Book key={book.id} book={book} bookShelves={shelves} />)}
                </ol>
              </div>
            </div>
          ))}
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelves;
