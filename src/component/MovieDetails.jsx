import { useState } from "react";
import { useLocalStorageState } from "../utils/useLocalStorageState";
import { useMovie } from "../utils/useMovie";
import parse from "html-react-parser"
import toast from "react-hot-toast";
import { BoxRight } from "./BoxRight";
import { Link,useNavigate } from "react-router-dom";
export const tempWatchedData = [
  {
    externals: {imdb: "tt1375666"},
    title: "All soul",
    status: "ended",
    poster:
      {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/128/321026.jpg",
original: "https://static.tvmaze.com/uploads/images/original_untouched/128/321026.jpg"
    },
      rating:{
        average:4.5
      }
  },
  
];
export function MovieDetails(){
    const value = {
      externals: {imdb: "tt1375666"},
      title: "All soul",
      status: "ended",
      poster:
        {
          medium: "https://static.tvmaze.com/uploads/images/medium_portrait/128/321026.jpg",
  original: "https://static.tvmaze.com/uploads/images/original_untouched/128/321026.jpg"
      },
        rating:{
          average:4.5
        }
    }
    const {movie,isOpen2,setIsOpen2} = useMovie();
    const [watched,setWatched] = useLocalStorageState([value],'watched');
    const [isAddMovie,setIsAddMovie] = useState(false);
    const [item,setItem] = useState([]);
    const navigate = useNavigate();

    
    // setWatched(tempWatchedData);
const {
  name : title,
  language,
  runtime,
  premiered : date,
  url,
  image:poster,
  summary,
  rating,
  genres,
  network,
  externals,
  status

} = movie
const currentMovie = {
  title,
  poster,
  rating,
  externals,
  status
}
// console.log(currentMovie);
function handleWatchedMovie(movie){
  setWatched((watched)=> [...watched,movie]);
  toast.success("New Movie Added!!! Check watchlist 🕹️");
}


// function handleWatchedList(movie){
//   setWatched((watched)=>[...watched,movie])}

// const plot =parse(summary)
function onCloseMovie(){
    setIsOpen2(!isOpen2);
}
    return <div className="details">
    <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster?.original} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {date} &bull; {runtime} 
              </p>
              <p>
                {language}
              </p>
              <p>{genres[0]}</p>
              <p>
                <span>⭐️</span>
                {rating.average===null ? 4.5 : rating.average} IMDb rating
              </p>
              
            </div>
          </header>
            
            <section>

            <div className="rating">
             
             <p>Add to WatchList</p>
             <button className="btn-add" onClick={()=>handleWatchedMovie(currentMovie)}>+ Add to List</button>
             <Link type="button" to={externals.imdb} className="btn-add" style={{textDecoration:"none"}}>📇 Book Your Ticket</Link>
              </div>
          
          {/* <em>{plot}</em> */}
          {network && <p>Network: {network?.name}</p>}
          <a href={url} style={{color:"white",textDecoration:"none"}}><p>Official-Site</p></a>  
          <p>
            {genres.map((x)=> {x})}
          </p>
            </section>

            {
              isAddMovie && <BoxRight/>
            }

            
  </div>
}