//
var fs =require ('fs');
var express = require('express');
var path = require('path');
var routeElectronic =require('./app_server/routes/ElectronicRoute');
var app = express();

app.use('/public', express.static(path.join(__dirname,'public')));


app.use(function(req,res,next){
    console.log("url...:" + req.originalUrl);
    console.log("time..:"+ Date.now());
    
    next();
});
app.use('/elektronik',routeElectronic);
        
app.listen(8000);
