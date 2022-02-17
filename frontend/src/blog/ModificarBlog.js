import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const URI = 'http://localhost:8080/blogs/';

const CompModificarBlog = () => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const navigate = useNavigate();

const {id} = useParams();
//procedimiento para actualizar

const actualizar = async(e)=>{
    e.preventDefault()
    await axios.put(`${URI}${id}`,{
        title:title,
        content:content
    })
    navigate('/')
}
useEffect (()=>{getBlogById()},[])

const getBlogById = async()=>{
   const res =  await axios.get(URI+id)
    setTitle(res.data.title)
    setContent(res.data.content)
}
return(<div>
<h3>editar Blog</h3>
    <form onSubmit={actualizar}
    >
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
        <button type="submit" className="btn btn-primary">Actualizar</button>
    </form>
    </div>)

}

export default CompModificarBlog;