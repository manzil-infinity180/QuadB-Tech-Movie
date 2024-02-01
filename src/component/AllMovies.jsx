import { MovieProvider } from "../utils/useMovie";
import { BoxLeft } from "./BoxLeft";
import { BoxRight } from "./BoxRight";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import {Toaster} from "react-hot-toast"
export function AllMovies(){
    return <>
    
    <Navbar />
     <Main>
       <BoxLeft />
       <BoxRight />
      </Main>  
      {/* </MovieProvider> */}
      
    </>
}