var express = require('express');
var app = new express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));
     var entries = [
        {"id":1, "title":"Hello World!"},
        {"id":2, "title":"Hello World!"}
        {"id":3, "title":"Hello World!"}
        {"id":4, "title":"Hello World!"}
        ];
if(entries.id == varGetFromFrontend){
console.log("This is to print a variable by choosing it from Front End")
 console.log(varGetFromFrontend)
}

var port = Number(process.env.PORT || 5000);
app.listen(port);