//using OS synchronous file API
const fs = require('fs')
const data = fs.readFileSync(__filename, 'utf-8')
console.log('File data is: ', data);
console.log('Test');

/*
File data is:  const fs = require('fs')
const data = fs.readFileSync(__filename, 'utf-8')
console.log('File data is: ', data);

console.log('Test');

Test
*/
