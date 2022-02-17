import axios from "axios";


import { useState } from "react";
import { useNavigate } from "react-router-dom";


const URI = 'http://localhost:8080/blogs';


const CompCrearBlog = () => {


    const [title, setTitle] = useState('')
    const [content  , setContent] = useState('')
    const navigate = useNavigate()
    //procedimiento guardar
    const guardar = async(e) =>{
        e.preventDefault();
        await axios.post(URI,{ title:title, content:content});
        navigate('/');
    }
    return ( 
    <div>
       <h3>Crear Blog</h3>
       <form onSubmit={guardar} >
           <div className="mb-3">
               <label  className="form-label">Titulo</label>
               <input 
               type="text"
               value={title}
               onChange= {(e)=>setTitle(e.target.value)} 
               className='form-control'
               /> </div>
               <div className="mb-3">
               <label  className="form-label">Contenido</label>
               <textarea 
               type="text"
               value={content}
               onChange= {(e)=>setContent(e.target.value)} 
               className='form-control'
               />
           </div>
           <button type="submit" className="btn btn-primary">Guardar</button>
       </form>
       </div>
    )
}


export default CompCrearBlog;