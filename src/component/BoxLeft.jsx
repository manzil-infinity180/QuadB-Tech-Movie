import { useState } from "react";
import { tempMovieData } from "../App";
import { useMovie } from "../utils/useMovie";
export function BoxLeft(){

    const {movies}=useMovie();
    console.log("hello");
    console.log(movies);
    const {FetchMovieItemData} = useMovie();
    // console.log(movies[0].show.language);
    // console.log(movies[0]);
    // const [movies, setMovies] = useState(tempMovieData);
    function handleMovieItem(id){
      console.log(id)
      FetchMovieItemData(id);
      
    }

    const [isOpen1, setIsOpen1] = useState(true);
    return(
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => (
                
                <li key={movie.show.id} onClick={()=>handleMovieItem(movie.show.externals.imdb)}>
                  <img src={movie.show.image?.original} alt={`${movie.Title} poster`} />
                  <h3>{movie.show.name}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.show.premiered===null? "N/A" : movie.show.premiered}</span>
                      <span> 💽 </span>
                      <span>{movie.show.status}</span>
                      <span>⭐️</span>
                      <span>{movie.show.rating.average===null? 4.5 : movie.show.rating.average}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
    )
}