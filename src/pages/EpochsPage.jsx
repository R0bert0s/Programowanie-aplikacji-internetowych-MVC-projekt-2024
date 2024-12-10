import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

const EpochsPage = () => {
  const [epochs, setEpochs] = useState([]);
  const [selectedEpoch, setSelectedEpoch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://wolnelektury.pl/api/epochs/")
      .then((response) => {
        setEpochs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching epochs:", error);
        setLoading(false);
      });
  }, []);

  const handleEpochChange = (event) => {
    setSelectedEpoch(event.target.value);
    setLoading(true);
    axios
      .get(`https://wolnelektury.pl/api/epochs/${event.target.value}/books/`)
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
      <h1 className="my-4">Szukaj Książek według Epoki</h1>
      <div className="mb-4">
        <select
          className="form-select"
          value={selectedEpoch}
          onChange={handleEpochChange}
        >
          <option value="">Wybierz epokę</option>
          {epochs.map((epoch) => (
            <option key={epoch.slug} value={epoch.slug}>
              {epoch.name}
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

export default EpochsPage;
