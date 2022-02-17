import mongoose from 'mongoose';
const url = 'mongodb+srv://root:root@cluster0.ixidx.mongodb.net/blog_crud?retryWrites=true&w=majority'
mongoose.connect(url);
const db = mongoose.connection;
db.on('open', () => { console.log('conectado a mongodb') });
db.on('error', () => { console.log('error al conectar a mongodb') })
export default db;