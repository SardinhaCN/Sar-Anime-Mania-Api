const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const configRoute = require('./routes/GetConfig');
const animeRoute = require('./routes/GetAnime');
const animeDelRoute = require('./routes/DelAnime');

// configuração do motor de vizualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));  // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

/*
app.use('/home', function(req, res, next) {
  res.status(200).render('pages/index');
});
*/

app.use('/api', configRoute);
app.use('/api', animeRoute);
app.use('/api', animeDelRoute);

// capturar 404 e encaminhar para o manipulador de erros
app.use(function(req, res, next) {
  next(createError(404));
});

// manipulador de erros
app.use(function(err, req, res, next) {
  // definir locais, fornecendo apenas erros no desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // renderizar a página de erro
  res.status(err.status || 500);
  res.render('pages/404', {
    status: err.status || 500,
    error: res.locals.error
  });
});

module.exports = app;