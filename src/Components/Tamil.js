
import { useState } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Home } from '../Template/Home';
import {tamil} from '../tamildata'


export function Tamil() {
const [data, setData] = useState(tamil)
const navigate = useNavigate()


  return (
    <Home>
    <div>
   
     
      <div className='movie-list'>
      {data.map((e, i) => (
        <Movie key={i} data={e} id={e.id} 
      editbtn ={<IconButton aria-label="delete"
      onClick={()=> navigate(`/movie/edit/${e.id}`) }
      >
      <EditIcon color='primary'/>
      
    </IconButton>}
      
        
        />
      ))}
    </div>
    </div>
    </Home>
  );
}
function Movie({ data ,id,dlt,editbtn}) {
  const navgigate = useNavigate()
  const [show, setShow] = useState(true);
  const rat = {
    color: data.rating >= 8 ? "Green" : "Red"
  };
  const summary = {
    display: show ? "none" : "block"
  };

  

  return (
    <div className='movie-container'>
      <img className='movie-poster' src={data.poster} alt='movie poster' />
      <div className='movie-detail'>
        <h3 className='movie-name'>{id} - {data.name}</h3>
        <p style={rat} className='movie-rating'>⭐{data.rating}</p>

      </div>
      
      <IconButton color="primary" onClick={() => setShow(!show)}>{show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</IconButton>
      <IconButton onClick={() => navgigate('/view/'+id)}><InfoIcon/></IconButton>
      {!show ? <p className='movie-summary'>{data.summary}</p> : ""}
     
      {editbtn} 
    </div>
  );
}
