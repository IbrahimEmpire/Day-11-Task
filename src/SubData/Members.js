
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from '../Template/Home';








export function Members() {

  const [user, setUser] = useState([]);
 
const navigate = useNavigate()
  const getUser= ()=>{
    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/books`,{method:"GET"})
    .then((res)=>res.json())
    .then((res)=> setUser(res))
  }
  useEffect(()=>{
    getUser()
    },[])




  
  return (
    <Home>
         <h1>Members</h1>
        <div className='T-carts'>
           
      {user.map((user, id)=>   

      <div className='member-container' key={id}>
        <div >
          <img className='img-con' src={user.image} alt='profile image' />
        </div>
        <div>
          <h4>Name: {user.name}</h4>
          <h5>Id: {user.id}</h5>
        </div>
        <div>
          <p> Age: {user.age}</p>
          <p>📱 Mobile No: {user.mobile}</p>
          <p>📧 Email: {user.email}</p>
          <p>🏠 Location: {user.location}</p>
        </div>
        
      </div>
  )}
     </div>
    </Home>
  );
}

