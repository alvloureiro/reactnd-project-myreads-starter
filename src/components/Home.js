import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelves from "./BookShelves";

const Home = ({ books }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelves bookList={books} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.array.isRequired
};

export default Home;
