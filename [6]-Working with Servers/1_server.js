const http = require('http')

const requestListener = (req, res) => {
  res.write("Hello world\n");
  res.end(); //stop otherwise endless streaming
};

//parse a listener/pointer to the function not fn()
//server is an event emitter
//const server = http.createServer(requestListener);
const server = http.createServer();
server.on('request', requestListener);

//call back
server.listen(4433, ()=>{
  console.log("started....");
});
