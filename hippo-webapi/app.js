var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var generate_guid = require('./generate_guid.js');
const port = 3000;
var users = require('./routes/users');
var cors = require('cors');
var app = express();


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var myArgs = process.argv[2];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/v1/users', users);
app.use('/api/v1/generate_guid', generate_guid);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
