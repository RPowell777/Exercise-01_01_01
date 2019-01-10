// Exercise 01_01_01
// Filename: sync-demo.js
// Author: Ryan Powell
// Date: January 9th, 2019

var fs = require('fs'); // File system package
// Whatever you require, you make it the variable name

var data = fs.readdirSync('/');
// Reads information from a directory and stores into the data variable

console.log("data: ", data);

console.log("This code is executed last.");