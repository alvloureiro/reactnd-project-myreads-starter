import React from "react";

const BookShelfChanger = ({ shelves }) => {
  return (
    <div className="book-shelf-changer">
      <select>
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

export default BookShelfChanger;
