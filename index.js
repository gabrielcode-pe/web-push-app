require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());





// Routes
app.use(require('./src/routes/index'));




// Static content
app.use(express.static(path.join(__dirname, './src/public')));





app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});