const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { dbConnection } = require('./database/config');
dbConnection();
const app = express();
app.use(cors());
app.use( bodyParser.urlencoded( { extended : true }));

app.use('/user', require('./routes/user'));
app.use(morgan('dev'))

app.listen( process.env.PORT || 3000, () => {
    const port = process.env.PORT || 3000;
    console.clear();
    console.log(`Servidor corriendo en el puerto ${port}`);
});