
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { Home } from './Home';

export const Editmovie = () => {
  const [movie, setMovie] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams();
  // const movie = data[id];


  useEffect(()=>{
    fetch(`https://646dbe919c677e23218a55fa.mockapi.io/books/${id}`,{method: "GET"})
    .then((res)=>res.json())
    .then((data)=>{setMovie(data)})
      },[])
  return(
    <Home>
    <div>    
    {movie ?  <div className='edit edit-cont'><img className='movie-poster' src={movie.poster}/> <Editform movie={movie}/> </div>: "Movie is loading..... pls wait...."
     }
     </div>
     </Home>
  )
}


export function Editform({movie}){
  const navigate = useNavigate()
  const [name, setName]= useState(movie.name)
const [poster, setPoster]= useState(movie.poster)
const [rating, setRating] = useState(movie.rating)
const [summary, setSummary]= useState(movie.summary)
const [video, setVideo]= useState(movie.video)
  return(
    <div className='add-movie'>
    <TextField variant="outlined" label="Name"  type='text' placeholder='name' value={name}
    onChange={(e)=>setName(e.target.value)}
    /><br></br>
      <TextField variant="outlined" label="Poster" type='text' placeholder='poster' value={poster}
    onChange={(e)=>setPoster(e.target.value)}
    /><br></br>
      <TextField variant="outlined" label="Rating" type='text' placeholder='rating' value={rating}
    onChange={(e)=>setRating(e.target.value)}
    /><br></br>
      <TextField variant="outlined" label="Summary" type='text' placeholder='summary' value={summary}
    onChange={(e)=>setSummary(e.target.value)}
    /><br></br>
    <Button variant="contained" 
    className='add-btn'
    onClick={()=>{
      const updatedMovie ={
        name:name,
        rating:rating,
        poster:poster,
        summary: summary
      }
     fetch(`https://646dbe919c677e23218a55fa.mockapi.io/books/${movie.id}`,{method: "PUT",
     body: JSON.stringify(updatedMovie),
     headers:{"Content-Type": "application/json"}
  }).then((data)=> data.json()).then(()=> navigate("/books"))
 
      //  setData([...data, newBook])
      //  navigate("/movie")
    }}>Save</Button>
  </div>
  )
}