

import './App.css';
import { Book } from './Components/Book';
import { AddBooks } from './Components/BookAdd';
import { BookDetails } from './BookDetails';
import { Home } from './Template/Home';
import { Route, Routes } from 'react-router-dom';
import { Tamil } from './Components/Tamil';
import { Editmovie } from './Components/BookEdit';
import { English } from './Components/English';
import { Members } from './SubData/Members';
import { HomePage } from './Components/HomePage';


function App() {
  return (
    <div className="App">
    


     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/books' element={<Book/>}/>
       <Route path='/view/:id' element={<BookDetails/>}/>
     <Route path='/addbook' element={<AddBooks/>}/>
     <Route path='/tamil' element={<Tamil/>}/>
     <Route path='/english' element={<English/>}/>
     <Route path='/members' element={<Members/>}/>
    
     <Route path='/book/edit/:id' element={<Editmovie/>}/>

       
     </Routes>
    </div>
  );
}

export default App;
