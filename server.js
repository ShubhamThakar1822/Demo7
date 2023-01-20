var express = require ("express");
var app = express();
app.get("/",function(req,resp){
    resp.sendFile("index.html",{root:__dirname});
})
app.listen(3600);
console.log("Ok Server Is ONNN Go Back To ClassRoom");