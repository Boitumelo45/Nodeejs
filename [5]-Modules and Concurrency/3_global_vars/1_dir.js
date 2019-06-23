//global object

/*
    attach variables or functions to global variables
*/
global.f = () => {
  console.log("Fun!");
}

console.dir(global, {depth : 0})

/*
This are globally available in Node.js:

Object [global] {
  DTRACE_NET_SERVER_CONNECTION: [Function],
  DTRACE_NET_STREAM_END: [Function],
  DTRACE_HTTP_SERVER_REQUEST: [Function],
  DTRACE_HTTP_SERVER_RESPONSE: [Function],
  DTRACE_HTTP_CLIENT_REQUEST: [Function],
  DTRACE_HTTP_CLIENT_RESPONSE: [Function],
  global: [Circular],
  process: [process],
  Buffer: [Function],
  clearImmediate: [Function: clearImmediate],
  clearInterval: [Function: clearInterval],

  clearTimeout: [Function: clearTimeout],
  setImmediate: [Function],
  setInterval: [Function: setInterval],
  setTimeout: [Function] }
*/


/*
....
  f: [Function] }
*/
