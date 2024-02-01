import { useEffect } from "react";
import { BoxRight } from "./component/BoxRight";
import { Navbar } from "./component/Navbar";
import { BoxLeft } from "./component/BoxLeft";
import { Main } from "./component/Main";
import { MovieProvider } from "./utils/useMovie";
import { MovieDetails } from "./component/MovieDetails";
import {Toaster} from "react-hot-toast"
export const tempMovieData = [
  {
    imdbID: "tt10329042",
    Title: "All Rise",
    Year: "2010",
    Poster:
    "https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const MovieData = [
  {
    imdbID:"",
    Title :"",
    language:"",
    summary:"",
    runtime:"",
    Poster:""

  }
]

export const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];


export default function App() { 
  useEffect(function(){
    async function fetchFunction(){
          const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
          const data = await res.json();
          // console.log(data);
    }
    fetchFunction();
  },[]);

  return (
    <>
      <MovieProvider>
     <Navbar />
     <Main>
       <BoxLeft />
       <BoxRight />
      </Main>  
      </MovieProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              fontSize:"1.3rem",
              backgroundColor: "white",
              color: "green",
              border: "1px solid green",
              padding: "25px",
              marginRight: "20px",
            },
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            style: {
              backgroundColor: "white",
              color: "red",
              border: "1px solid red",
              padding: "15px",
              marginRight: "20px",
            },
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
    </>
  );
}
