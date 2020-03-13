// conexion a la base de datos
// npm install mongoose
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/personal-crud';


mongoose.connect(URI)
    .then(db => console.log('bd conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;