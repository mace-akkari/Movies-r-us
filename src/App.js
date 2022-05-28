import React, { useEffect } from "react";

import IndividualMovieCard from "./IndividualMovieCard";
import SearchIcon from "./search.svg";

// api key --->  http://www.omdbapi.com/?i=tt3896198&apikey=6124488b

const API_URL = "http://www.omdbapi.com?apikey=6124488b";

const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovie("Batman");
  }, []);

  return (
    <section>
      <h1>Movies 'R' Us</h1>
      <div className="searchbar">
        <input placeholder="Search Movies 'R' Us" onClick={() => {}} />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <section className="container">
        <IndividualMovieCard movie={movie} />
      </section>
    </section>
  );
};

export default App;
