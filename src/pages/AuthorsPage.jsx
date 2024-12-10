import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://wolnelektury.pl/api/authors/")
      .then((response) => {
        setAuthors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
        setLoading(false);
      });
  }, []);

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
    setLoading(true);
    axios
      .get(`https://wolnelektury.pl/api/authors/${event.target.value}/books/`)
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="my-4">Szukaj Książek według Autora</h1>
      <div className="mb-4">
        <select
          className="form-select"
          value={selectedAuthor}
          onChange={handleAuthorChange}
        >
          <option value="">Wybierz autora</option>
          {authors.map((author) => (
            <option key={author.slug} value={author.slug}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorsPage;
