import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const URI = 'http://localhost:8080/blogs'

const CompMostrarBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    //procedimiento para mostrar blogs

    const getBlogs = async() => {
        const res = await axios.get(URI);
        setBlog(res.data)
    }

    //eliminar un blog
    const deleteBlog = async(id) => {
        await axios.delete(`${URI}/${id}`);
        getBlogs()
    }

    return ( 
    <div className = 'container'>
        <div className = "row" >
            <div className = "col" >
                <Link to='/create' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                <table className = "table" >
                    <thead className = "table-primary" >
                        <tr >
                            <th > Title </th>
                            <th > Content </th> 
                            < th > Actions </th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        {blogs.map((entrada, index)=>(
                            <tr key={index} >
                            <td>{entrada.title}</td>
                            <td>{entrada.content}</td>
                            <td>
                            <Link to={`/edit/${entrada._id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                <button className='btn btn-danger' onClick={()=>deleteBlog(entrada._id)}><i className="fa-solid fa-trash-can"></i></button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div> 
        </div> 
    </div>
    )





}

export default CompMostrarBlogs