import React from "react";

const IndividualMovieCard = ({ movie }) => {
  return (
    <div className="individual_movies">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "No Poster Available"}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default IndividualMovieCard;
