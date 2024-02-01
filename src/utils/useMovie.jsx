import {useContext,createContext,useEffect, useState} from "react";

const MovieContext = createContext();

function MovieProvider({children}){
     
      const [isLoading,setisLoading] = useState(false);
      const [movies,setMovies] = useState([]);
      const [movie,setMovie] = useState({});
      const [isOpen2, setIsOpen2] = useState(true);
      useEffect(function(){
        async function fetchData(){
            try{
                setisLoading(true);
                const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
                const data = await res.json();
                console.log(data);
                console.log(data.show);
                setMovies(data);
                // console.log(program);
                console.log(data[0].show.language)
                console.log(data[0].show.image.original);
                console.log(data[0].show.summary);
                console.log(data[0].show.url);
                console.log(data[0].show.name)
                console.log(data[0].show.premiered.slice(0,4))
            }catch(err){
                 console.log(err);
            }finally{
                setisLoading(false);
            }
        }
        fetchData();
      },[]);


      
        async function FetchMovieItemData(id){
            try{
                setisLoading(true);
                const res = await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${id}`);
                const data = await res.json();
                console.log(data);
                setMovie(data);
                setIsOpen2(false);
                // console.log(data.show);
                // setMovies(data);
                // console.log(program);
                // console.log(data[0].show.language)
                // console.log(data[0].show.image.original);
                // console.log(data[0].show.summary);
                // console.log(data[0].show.url);
                // console.log(data[0].show.name)
                // console.log(data[0].show.premiered.slice(0,4))
            }catch(err){
                 console.log(err);
            }finally{
                setisLoading(false);
            }
        }
       
     
    return <MovieContext.Provider value={{
        isLoading,
        movies,
        movie,
        isOpen2,
        setIsOpen2,
        FetchMovieItemData
    }}>
        {children}
    </MovieContext.Provider>
}

function useMovie(){
    const contextValue = useContext(MovieContext);
    if(contextValue===undefined){
        throw new Error("CityContext is used outside the cityprovider");
    }
    return contextValue;
}

export {useMovie,MovieProvider};