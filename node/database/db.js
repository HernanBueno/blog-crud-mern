import mongoose from 'mongoose';
const url = urldb
mongoose.connect(url);
const db = mongoose.connection;
db.on('open', () => { console.log('conectado a mongodb') });
db.on('error', () => { console.log('error al conectar a mongodb') })
export default db;
