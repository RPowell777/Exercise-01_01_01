// Exercise 01_01_01
// Filename: sync-demo.js
// Author: Ryan Powell
// Date: January 9th, 2019

var fs = require('fs'); // File system package
// Whatever you require, you make it the variable name

fs.readdir('/', function(err, data) {
    console.log("data: ", data);
});
// Annoymous function that will run ass its readding the directory

console.log("This code is last executed!");
