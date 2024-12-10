import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";

const AudiobooksPage = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://wolnelektury.pl/api/audiobooks/")
      .then((response) => {
        setAudiobooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching audiobooks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Odkryj Nowe Audiobooki</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {audiobooks.map((audiobook) => (
            <BookCard key={audiobook.id} book={audiobook} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AudiobooksPage;
