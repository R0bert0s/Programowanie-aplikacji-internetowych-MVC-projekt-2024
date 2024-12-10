import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BookGenre from "../components/BookGenre";
import Loading from "../components/Loading";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://wolnelektury.pl/api/genres/")
      .then((response) => {
        setGenres(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Odkrywaj książki po gatunku</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {genres.map((genre) => (
            <BookGenre key={genre.slug} genre={genre} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenresPage;
