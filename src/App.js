import React, { useEffect } from 'react';


// api key --->  http://www.omdbapi.com/?i=tt3896198&apikey=6124488b

const API_URL =  'http://www.omdbapi.com?apikey=6124488b';

const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
  }


  return (
    <h1>App</h1>
  )
}

export default App;