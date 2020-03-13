// comando npm init --yes
// npm install express
// npm install nodemon -D

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settigns
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));


// routes
app.use('/api/employees', require('./routes/employee.routes'));

// empezando el servidor
app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto ", app.get('port'))
});