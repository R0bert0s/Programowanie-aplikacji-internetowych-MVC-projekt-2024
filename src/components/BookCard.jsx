import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookCard = ({ book }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body text-center shadow-sm">
          <img
            src={book.simple_thumb}
            alt={book.title}
            className="card-img-top"
            style={{ width: "200px", height: "auto" }}
          />
          <h5 className="card-title mt-3">{book.title}</h5>
          <p className="card-text">Autor: {book.author}</p>
          <a href={book.url} className="btn btn-primary">
            Czytaj więcej
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
