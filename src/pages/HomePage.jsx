import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://wolnelektury.pl/api/books/")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Odkryj Nowe Książki</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              simple_thumb={book.simple_thumb}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
