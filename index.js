var express = require('express');
var app = new express();

var port = Number(process.env.PORT || 5000);
app.listen(port);