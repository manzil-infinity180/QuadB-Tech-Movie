import { useLocalStorageState } from "../utils/useLocalStorageState";
import { useMovie } from "../utils/useMovie";


export function MovieDetails(){
    const {movie,isOpen2,setIsOpen2} = useMovie();
    const [watched,setWatched] = useLocalStorageState([],'watched');
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
  network

} = movie
function handleWatchedMovie(movie){
    setWatched((watched)=> [...watched,movie]);
  }
function handleWatchedList(){
    const watched = {title,
        language,
        runtime,
        date,
        url,
        poster,
        summary,
        rating,
        genres,
        network}
        setWatched((watched)=> [...watched,]);
console.log(watched);
}
const plot = summary.replace('<b>',"").replace('</b>',"").replace('<p>',"").replace('</p>',"");
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
             <button className="btn-add" onClick={handleWatchedList} >+ Add to List</button>
              
              </div>
          
          <em>{plot}</em>
          {network && <p>Network: {network?.name}</p>}
          <a href={url} style={{color:"white",textDecoration:"none"}}><p>Official-Site</p></a>  
          <p>
            {genres.map((x)=> {x})}
          </p>
              
            
            </section>
         
            

          
  </div>
}