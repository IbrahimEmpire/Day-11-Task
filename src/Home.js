import React from 'react'
import {Drawer, Box, Typography, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';


export const Home = ({children}) => {
  const [draw, setDraw] = useState(false)
  const navigate = useNavigate()
  return (
    <div>    
        <div className='nav-bar'>
      <IconButton size='large' edge='end' color='inherit' aria-label='logo'
      onClick={()=> setDraw(true)}
      >
       
     <Button variant="contained" size="small" color='success'className='nav-btn'
        ><LanguageIcon/></Button>{"  "}
      </IconButton>
      <Drawer
      anchor='left'
      open={draw}
      onClose={()=> setDraw(false)}
      >
<Box p={2} width="250px"  role="presentation" >
  <Typography variant='h6' component='div'>
    <button className='main-btn' onClick={()=> navigate('/tamil')}><img className='movie-poster' src='https://www.degruyter.com/document/cover/isbn/9780674974678/product_pages'/></button>
    <button className='main-btn' onClick={()=> navigate('/english')} ><img className='movie-poster' src='https://img.freepik.com/free-vector/english-book-illustration-design_23-2149553127.jpg?w=2000'/></button>
  </Typography>
</Box>
      </Drawer>
      <div className='nav-btn'>
        <Button variant="contained" size="small"color='success'
        onClick={()=>navigate('/books')}
        ><MenuBookIcon/></Button>{"  "}
          <Button variant="contained" size="small" color='success'className='nav-btn'
        onClick={()=>navigate('/addbook')}
        ><AddIcon/></Button>{" "}
        <Button variant="contained" size="small" color='success'className='nav-btn'
        onClick={()=>navigate('/members')}
        ><GroupIcon/></Button>{" "}
         <Button color='success' size="small" variant="contained"className='nav-btn'
        onClick={()=>navigate('/')}
        ><HomeIcon/></Button>
      </div>
    </div>
    
    <div>{children}</div>
    </div>

  )
}
