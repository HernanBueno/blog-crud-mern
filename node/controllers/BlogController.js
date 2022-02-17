//importamos el modelo
import BlogModel from '../models/BlogModel.js';

//metodos para CRUD


//mostrar todos los registros
export const getAllBlogs = async(req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}


//muestro un solo registro
export const getBlog = async(req, res) => {
    try {
        const id = req.params.id;
        await BlogModel.findById({ _id: id }).then((blog) => { res.status(200).json(blog) })

    } catch (error) {
        res.json({ message: error.message })

    }
}


//crear un registro
export const postBlog = async(req, res) => {
    try {

        await BlogModel.create(req.body);
        res.status(200).json({ 'message': 'Entrada Creada con exito' })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//actualizo registro

export const updateBlog = async(req, res) => {
    try {
        const id = req.params.id;
        await BlogModel.updateOne({ _id: id }, req.body).then(res => { console.log(res) })
        res.status(200).json({
            'message': 'registro actualizado correcatmente'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// borrar registro
export const deleteBlog = async(req, res) => {
    try {
        const id = req.params.id;
        await BlogModel.deleteOne({ _id: id }).then(res => { console.log("borrado") })
        res.status(200).json({
            'message': 'registro eliminado correcatmente'
        })
    } catch (error) {
        res.json({ message: error.message })
    }

}