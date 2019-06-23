//callback pattern
const fs = require('fs')

fs.readFile(__filename, function callBack(err, data){
    console.log('File data: ', data);
})


console.log('Test');

/*
Test
File data:  <Buffer 63 6f 6e 73 74 20 66 73 20 3d 20 72 65 71 75 69 72 65 28 27 66 73 27 29 0a 0a 66 73 2e 72 65 61 64 46 69 6c 65 28 5f
5f 66 69 6c 65 6e 61 6d 65 2c 20 ... 87 more bytes>
*/
