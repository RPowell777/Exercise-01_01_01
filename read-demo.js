// Exercise 01_01_01
// Filename: sync-demo.js
// Author: Ryan Powell
// Date: January 11th, 2019

var fs = require('fs');

fs.readFile('./data1.json', function (err, data) {
    console.log(data);8
});