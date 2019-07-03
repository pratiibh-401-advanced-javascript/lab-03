'use strict';

const fs = require('fs');

// let testing = process.argv;

let numericData = (Math.random() * 100).toString();


fs.writeFile('./files/test.txt', numericData, (err) => {
  if (err) throw err;
  console.log('Data has been written to file');
});


fs.readFile('./files/test.txt', (err, data) => {
  if (err) throw err;
  console.log('The random integer written to file is: ' +data.toString());
});
