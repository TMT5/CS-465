var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var handlebars = require('hbs');
const express = require('express');
const path = require('path');

handlebars.registerPartials(path.join(__dirname, 'app_server/views/partials'));

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');
app.get('/travel.html', (req, res) => {
  res.redirect('/travel');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/travel', travelRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
