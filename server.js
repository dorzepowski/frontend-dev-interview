var express = require('express');
var app = express();


app.use(express.static('web'));

app.listen(8123, function () {
    console.log('Starts server on port ', 8123);
});