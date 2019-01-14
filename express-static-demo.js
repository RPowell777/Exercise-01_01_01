// Exercise 01_01_01
// Filename: sync-demo.js
// Author: Ryan Powell
// Date: January 11th, 2019

var express = require('express');
var app = express();

var port = 8080;

app.listen(port, function() {
    console.log("Serving listening on localhost:%s", port());
});