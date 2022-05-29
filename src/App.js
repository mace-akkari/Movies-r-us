import React, { useEffect, useState } from "react";

import IndividualMovieCard from "./IndividualMovieCard";
import SearchIcon from "./search.svg";

// api key --->  http://www.omdbapi.com/?i=tt3896198&apikey=6124488b

const API_URL = "http://www.omdbapi.com?apikey=6124488b";

const App = () => {
  const [movies, SetMovies] = useState([]);
  const [searchMovieName, setSearchMovieName] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    SetMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <section>
      <h1>Movies 'R' Us</h1>
      <div className="searchbar">
        <input
          placeholder="Search Movies 'R' Us"
          value={searchMovieName}
          onChange={(e) => setSearchMovieName(e.target.value)}
        />
        {/* <img src={SearchIcon} alt="search" onClick={() => {}} /> */}
      </div>
      {movies?.length > 0 ? (
        <section className="container">
          {movies.map((movie) => (
            <IndividualMovieCard movie={movie} />
          ))}
        </section>
      ) : (
        <div>
          <h2>No Movies Available</h2>
        </div>
      )}
    </section>
  );
};

export default App;
