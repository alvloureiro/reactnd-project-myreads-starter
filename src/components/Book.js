import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book, bookShelves, onChangeBookShelf }) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
          <BookShelfChanger
            shelves={bookShelves}
            book={book}
            onBookShelfChange={onChangeBookShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      smallThumnail: PropTypes.string,
      thumbnail: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
  }),
  bookShelves: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
};

export default Book;
