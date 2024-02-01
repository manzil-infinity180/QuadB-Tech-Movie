import { useMemo, useState } from "react";
import {tempWatchedData} from "../App.jsx";
import { useMovie } from "../utils/useMovie.jsx";
import { MovieDetails } from "./MovieDetails.jsx";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export function BoxRight(){

  // const [isOpen2, setIsOpen2] = useState(true);
const [watched, setWatched] = useState(tempWatchedData);
// const watched = localStorage.getItem("watched");

const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
const avgUserRating = average(watched.map((movie) => movie.userRating));
const avgRuntime = average(watched.map((movie) => movie.runtime));

const {movie,isOpen2,setIsOpen2} = useMovie();
const {
  name : title,
  language,
  runtime,
  premiered : date,
  officialSite,
  image:poster,
  summary

} = movie
// const x = localStorage.getItem("watched");
// console.log(JSON.parse(x));
// const movie = [JSON.parse(x)];
movie.name!==undefined && console.log({
  title,
  language,
  runtime,
  date,
  officialSite,
  poster,
  summary
})
  return (
    <div className="box">
    <button
      className="btn-toggle"
      onClick={() => setIsOpen2((open) => !open)}
    >
      {isOpen2 ? "–" : "+"}
    </button>
    {
      isOpen2===false && <MovieDetails />
    }
    {isOpen2 && (
      <>
        <div className="summary">
          <h2>Movies you watched</h2>
          <div>
            <p>
              <span>#️⃣</span>
              <span>{watched.length} movies</span>
            </p>
            <p>
              <span>⭐️</span>
              <span>{avgImdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{avgUserRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{avgRuntime} min</span>
            </p>
          </div>
        </div>

        <ul className="list">
          {watched.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>{movie.imdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{movie.userRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{movie.runtime} min</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
  )
}
