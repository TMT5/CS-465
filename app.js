require('dotenv').config();

var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var handlebars = require('hbs');
var passport = require('passport'); 
require('./app_api/config/passport'); 

const express = require('express');
const path = require('path');
const cors = require('cors');

var apiRouter = require('./app_api/routes/index');

require('./app_api/models/db');

const app = express();
const port = 3000;

// CORS
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Manual API CORS headers
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use((err, req, res, next) => { 
  if(err.name === 'UnauthorizedError') { 
      res 
        .status(401) 
        .json({"message": err.name + ": " + err.message}); 
      } 
    }); 

// Handlebars setup
handlebars.registerPartials(path.join(__dirname, 'app_server/views/partials'));

app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

// Redirect old travel.html route
app.get('/travel.html', (req, res) => {
  res.redirect('/travel');
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize()); 

// Routes
app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});