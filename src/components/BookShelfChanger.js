import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ shelves, book, onBookShelfChange }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={event => {
          onBookShelfChange(book, event.target.value);
        }}
      >
        <option value="none" disabled>
          Move to...
        </option>
        {shelves.map(shelf => (
          <option key={shelf.name} value={shelf.name}>
            {shelf.displayName}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  shelves: PropTypes.array.isRequired,
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      smallThumnail: PropTypes.string,
      thumbnail: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
  }),
  onBookShelfChange: PropTypes.func.isRequired
};

export default BookShelfChanger;
