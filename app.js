const express = require('express');
const app = express();
const morgan = require('morgan');


app.use('/', function (req, res, next) {
    morgan('dev');
    //console.log(req.method, '|', res.statusCode);
    next();
})



app.listen(3000, console.log('Listening on port 3000'));