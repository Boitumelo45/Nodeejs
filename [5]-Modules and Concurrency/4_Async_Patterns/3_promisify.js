//any asynchoronous node function/job can be promisified
const fs = require('fs')
const util = require('util')

//const { readFile } = require('fs').promisify

const readFile = util.promisify(fs.readFile)

async function main(){
    const data = await readFile(__filename)
    console.log(data);
}

main()
console.log('TEST');

/*
TEST
<Buffer 0a 63 6f 6e 73 74 20 66 73 20 3d 20 72 65 71 75 69 72 65 28 27 66 73 27 29 0a 63 6f 6e 73 74 20 75 74 69 6c 20 3d 20 72 65 71 75

69 72 65 28 27 75 74 ... 173 more bytes>
*/
