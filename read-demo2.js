// Exercise 01_01_01
// Filename: sync-demo.js
// Author: Ryan Powell
// Date: January 11th, 2019

// var fs = require('fs');

//     fs.readFile('./data1.json', 'utf-8', function (err, data) {
//     console.log(data);
//     data = JSON.parse(data);
//     console.log(data.name);
// });

var data = require('./data1.json');

console.log(data.name);