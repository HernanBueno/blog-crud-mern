
import './App.css';
import CompMostrarBlogs from './blog/MostrarBlogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCrearBlog from './blog/CrearBlog';
import CompModificarBlog from './blog/ModificarBlog';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompMostrarBlogs/>}/>
        <Route path='/create' element={<CompCrearBlog/>}/>
        <Route path='/edit/:id' element={<CompModificarBlog/>}/>
          </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
