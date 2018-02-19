import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const BookShelves = ({ bookList }) => {
  const bookShelves = [
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
  ];

  return (
    <div className="list-books-content">
      {bookShelves.map(shelf => (
        <div key={shelf.name} className="bookshelf">
          <h2 className="bookshelf-title">{shelf.displayName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {bookList
                .filter(book => book.shelf === shelf.name)
                .map(book => <Book key={book.id} book={book} bookShelves={bookShelves} />)}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

BookShelves.propTypes = {
  bookList: PropTypes.array.isRequired
};

export default BookShelves;
