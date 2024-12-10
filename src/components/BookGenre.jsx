import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BookGenre = ({ genre }) => {
  const [genreDetails, setGenreDetails] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    axios
      .get(`https://wolnelektury.pl/api/genres/${genre.slug}/`)
      .then((response) => {
        setGenreDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching genre details:", error);
      });
  }, [genre.slug]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body text-center d-flex flex-column justify-content-center">
          <h5 className="card-title mt-3">{genre.name}</h5>
          {genreDetails && (
            <div>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{
                  __html: isCollapsed
                    ? genreDetails.description.slice(0, 100) + "..."
                    : genreDetails.description,
                }}
              ></p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-secondary mb-2 mx-2"
                  onClick={toggleCollapse}
                >
                  {isCollapsed ? "Pokaż więcej" : "Pokaż mniej"}
                </button>
                <a
                  href={genreDetails.url}
                  className="btn btn-primary mb-2 mx-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookGenre;
