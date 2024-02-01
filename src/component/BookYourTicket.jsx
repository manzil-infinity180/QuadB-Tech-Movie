import { useMovie } from "../utils/useMovie"
import {useNavigate, useParams} from "react-router-dom"
import {toast} from "react-hot-toast"
import { useLocalStorageState } from "../utils/useLocalStorageState";
import { useState } from "react";
export function BookYourTicket(){
  const {movie} = useMovie();
  console.log(movie);
  const navigate = useNavigate();
  const id = useParams();
  const [booking,setBooking] = useLocalStorageState([],"booking");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [ticket,setTicket] = useState("");
  const movieName = movie.name;
  const user = {
     name,
     email,
     ticket,
     movieName
     
  }

  function handleSubmit(user){
     setBooking((value)=>[...value,user])
    toast.success("Hey!Your book has been Done ✅")
       navigate('/');
       
  }

    return <>
    <h1 style={{textAlign:"center",fontSize:"6rem"}}>Book Your Ticket</h1>
    <div className="booking-div">
      
    <div className="centered-booking">
      <img src={movie.image?.original}  style={{width:"20%",textAlign:"center"}}/>
    <form>
    {/* <label htmlFor="fname">Movie</label> */}
    <input type="text"  className="input-booking" id="fname" name="moviename" placeholder="Movie" value={movie.name}/>

    {/* <label htmlFor="fname">First Name</label> */}
    <input type="text" className="input-booking" id="fname" name="firstname" placeholder="Your name.." value={name} onChange={(e)=>setName(e.target.value)} />

    {/* <label htmlFor="lname">Last Name</label> */}
    <input type="text" className="input-booking" id="lname" name="lastname" placeholder="Your last name.."
    value={email} onChange={(e)=>setEmail(e.target.value)} />

    {/* <label htmlFor="country">Country</label> */}
   <input type="number"  className="input-num" placeholder="Number of ticket"
   value={ticket} onChange={(e)=>setTicket(e.target.value)}/>
  
  </form>
    <button type="submit" className="button-booking" onClick={()=>handleSubmit(user)}>Submit</button>
  </div>
</div>
  
    </>
}