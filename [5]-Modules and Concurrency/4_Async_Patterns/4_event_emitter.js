const EventEmitter = require('events')

/*
  Streams: stdin, stdout

*/

const myEmitter = new EventEmitter()

myEmitter.emit('TEST_EVENT') //nothing is logged

for(let i =0; i< 3; i++){
myEmitter.on('TEST_EVENT', ()=>{
  console.log('TEST_EVENT was fired');
  });
}

myEmitter.emit('TEST_EVENT')

/*
TEST_EVENT was fired
TEST_EVENT was fired
TEST_EVENT was fired
*/
