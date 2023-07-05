// Imports
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
const path = require('path');
const helmet = require('helmet');
const app = express();
const { sequelize } = require('./database/database')

sequelize.authenticate()
.then(()=>console.log('BD conectada'))
.catch(err=>console.log(`Error al conectar a la bd: ${err}`))

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render('404');

})

// Starting the server
app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));