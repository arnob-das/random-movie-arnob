import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch('https://k2maan-moviehut.herokuapp.com/api/random')
    .then(response => response.json())
    .then(data => setMovie(data))
  }, [])

  movie && console.log(movie)

  return (
    <div className="App p-5 m-5">
      <h1>{movie?.name}</h1>
      <h4>Release Year: {movie.releaseYear}</h4>
      <h3>Duration: {movie.runtime}</h3>
      <h4>Genre: {movie.genre}</h4>
      <h4>IMDB Rating: {movie.imdbRating}</h4>
      <h5>Director: {movie.director}</h5>
      <p>Overview: {movie.overview}</p>
    </div>
  );
}

export default App;
