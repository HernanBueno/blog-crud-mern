import express from "express";
import cors from 'cors';
import db from './database/db.js';

//importo rutas
import blogRoutes from './routes/routes.js';


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/blogs', blogRoutes)




app.listen(8080, () => {
    console.log('servidor corriendo en http://localhost:8080')
})