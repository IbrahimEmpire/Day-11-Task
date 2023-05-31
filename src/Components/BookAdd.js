import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Home } from '../Template/Home';
import {  useFormik } from 'formik';
import * as yup from 'yup'

const bookValidationSchema = yup.object({
  name: yup.string().min(5, "Need a FullName Of Book").required("Why not fill the name 😉"),
  poster: yup
    .string()
    .min(4, "Need longer poster😉")
    .required("Why not fill this poster"),
  rating: yup
    .number()
    .min(0, "Need a higher rating")
    .max(10, "To much rating")
    .required("Why not fill rating 😉"),
  summary: yup
    .string()
    .min(20, "Need longer Summary")
    .required("Why not fill summary😉"),
  trailer: yup
    .string()
    .min(4, "Need longer Trailer")
    .required("Why not fill trailer"),
});

export const AddBooks = () => {
    const navigate = useNavigate()
    // const [poster, setPoster] = useState("")
    // const [name, setName] = useState("")
    // const [rating, setRating] = useState("")
    // const [summary, setSummary] = useState("")
    // const [video, setVideo] = useState("")
    const bformik = useFormik({
       initialValues:{
          name:"",
          poster:"",
          rating:"",
          summary:"",
          video:""
      },
      validationSchema: bookValidationSchema,
      onSubmit:(newBook)=>{
         console.log("input", newBook)
         createBook(newBook)
      }

    })

    const createBook=(newBook)=>{
      fetch(`https://646dbe919c677e23218a55fa.mockapi.io/books`,{
                method:"POST",
                // body: JSON.stringify(newBook),
                headers:{"Content-Type": "application/json"}
            }, 
            )
            .then((res)=> res.json())
            .then(()=> navigate("/books"))
      
    }

  return (
    <Home>
   <form onSubmit={bformik.handleSubmit} className='book-container'>
    <div className='book-site-con'>
       <img className='add-book-img' src='https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/book_blue_add.png' alt='add-book-image'/>
    </div>
     <div className='add-movie'>
      <h1 className='add-lable'>ADD BOOK DETAILS</h1>
        <TextField size='small'
         id="poster"
         name="poster" 
         label="Book Poster Url" variant="outlined" 
         onChange={bformik.handleChange} onBlur={bformik.handleBlur}
         value={bformik.values.poster}/>
               {bformik.touched.poster && bformik.errors.poster ? bformik.errors.poster : ""}
         <br></br>
         <br></br>

        <TextField size='small' id="name" name="name" 
         label="Book Name" variant="outlined"
         onChange={bformik.handleChange} onBlur={bformik.handleBlur}
         value={bformik.values.name}
         />
          {bformik.touched.name && bformik.errors.name ? bformik.errors.name : ""}
         <br></br>
         <br></br>

        <TextField size='small' id="rating" name="rating" 
        label="Rating" variant="outlined" 
        onChange={bformik.handleChange} onBlur={bformik.handleBlur}
         value={bformik.values.rating}
        />
         {bformik.touched.rating && bformik.errors.rating ? bformik.errors.rating : ""}
        <br></br>
        <br></br>

        <TextField size='small' id="summary" name="summary" 
         label="Summary" variant="outlined" 
         onChange={bformik.handleChange} onBlur={bformik.handleBlur}
         value={bformik.values.summary}
         />
         {bformik.touched.summary && bformik.errors.summary ? bformik.errors.summary : ""}
         <br></br>
         <br></br>
        <TextField size='small' id="video" name="video" 
         label="Trailer Video" variant="outlined"
         onChange={bformik.handleChange} onBlur={bformik.handleBlur}
         value={bformik.values.video}
         />
          {bformik.touched.video && bformik.errors.video ? bformik.errors.video : ""}
         <br></br>
         <br></br>
        <Button variant="outlined"
        type='submit'
        onClick={createBook}
    
        >Add Book</Button><br></br>
        <Button variant="outlined" onClick={()=> navigate(-1)}><ArrowBackIosNewIcon/><ArrowBackIosNewIcon/><ArrowBackIosNewIcon/></Button>
    </div>
    </form>
    </Home>

  )
}


