const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');

app.use(morgan('dev'));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.render( 'index', {title: 'Hall of Fame', people: people} );

app.use('/', function (req, res, next) {
    morgan('dev');
    //console.log(req.method, '|', res.statusCode);
    next();
})




app.listen(3000, console.log('Listening on port 3000'));