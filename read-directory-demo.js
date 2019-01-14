// Exercise 01_01_01
// Filename: sync-demo.js
// Author: Ryan Powell
// Date: January 11th, 2019

var fs = require('fs');

fs.readdir('/', function(err, data){
    console.log(data);
});