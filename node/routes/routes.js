import express from "express";
import { deleteBlog, getAllBlogs, getBlog, postBlog, updateBlog } from '../controllers/BlogController.js'
const router = express.Router();


//endpoints
router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', postBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog)


export default router;