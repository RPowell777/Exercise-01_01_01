// Exercise 01_01_01
// Filename: sync-demo.js
// Author: Ryan Powell
// Date: January 11th, 2019

var fs = require('fs');

var jsonstring = {
    "name": "Jake, The god",
    "age": 70
}

fs.writeFile('./data2.json', JSON.stringify(jsonstring), function(err) {
    if (err) {
        console.log(err);
    }
});