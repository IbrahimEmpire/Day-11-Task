

import './App.css';
import { Book } from './Book';
import { AddBooks } from './BookAdd';
import { BookDetails } from './BookDetails';
import { Home } from './Home';
import { Route, Routes } from 'react-router-dom';
import { Tamil } from './Tamil';
import { Editmovie } from './BookEdit';
import { English } from './English';
import { Members } from './Members';
import { HomePage } from './HomePage';


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
