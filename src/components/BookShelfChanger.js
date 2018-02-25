import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ shelves, bookShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select value={bookShelf} onChange={() => {}}>
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
  bookShelf: PropTypes.string.isRequired
};

export default BookShelfChanger;
