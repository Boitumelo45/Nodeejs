//simple server

const http = require('http')

//create server
const server = http.createServer((req, res) => {
                /*
                        request listener
                                req: request
                                res: respond
                */
                res.end("Hello, world!\n")
            })

//activate server
server.listen(4243, ()=>{
    console.log("Server is running...");
})
