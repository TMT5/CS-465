var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var handlebars = require('hbs');

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
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
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

// Routes
app.use('/', indexRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});