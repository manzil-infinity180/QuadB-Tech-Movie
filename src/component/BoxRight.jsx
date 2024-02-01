import { useMemo, useState } from "react";
import {tempWatchedData} from "../App.jsx";
import { useMovie } from "../utils/useMovie.jsx";
import { MovieDetails } from "./MovieDetails.jsx";
import { useLocalStorageState } from "../utils/useLocalStorageState.js";
const value = [
  {
    externals: {imdb: "tt1375666"},
    title: "All soul",
    status: "Ended",
    poster:
      {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/128/321026.jpg",
original: "https://static.tvmaze.com/uploads/images/original_untouched/128/321026.jpg"
    },
      rating:{
        average:4.5
      }
  },
  {
    externals: {imdb: "tt7414406"},
    title: "All American",
    status: "Ended",
    poster:
      {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/128/321026.jpg",
original: "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
    },
      rating:{
        average:6.1
      }
  }
  
];
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export function BoxRight(){
// const localdata = localStorage.getItem("watched");
// const watched = JSON.parse(localdata);
// const [watched,setWatched] = useLocalStorageState(x,"watched");
// const [watched,setWatched] = useState(tempWatchedData);
// const watched = movie;
const [watched,setWatched] = useState(value); 

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
    <>
    {watched ? <div className="box">
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
              <span>💿</span>
              <span>Status</span>
            </p>
          </div>
        </div>

        <ul className="list">
          {watched.map((movie) => (
            
            <li key={movie.externals.imdb}>
              <img src={movie.poster?.original} alt={`${movie.title} poster`} />
              <h3>{movie.title}</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>{movie.rating.average!==null ? movie.rating.average : 4.5}</span>
                </p>
                <p>
                  <span>💽</span>
                  <span>{movie.status}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )}
  </div> : <div className="box">
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
              <span>💿</span>
              <span>Status</span>
            </p>
          </div>
        </div>

        <ul className="list">
          {watched.map((movie) => (
            
            <li key={movie.externals.imdb}>
              <img src={movie.poster?.original} alt={`${movie.title} poster`} />
              <h3>{movie.title}</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>{movie.rating.average!==null ? movie.rating.average : 4.5}</span>
                </p>
                <p>
                  <span>💽</span>
                  <span>{movie.status}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>}
  </>
  )
}
