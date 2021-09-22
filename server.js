const express = require("express");
const server = express()

server.all('/',(req,res)=>{
    res.send("Server is running!")
})

function keepAlive(){
    server.listen(3000, () =>{
        console.log("Interal Server is ready.")
    })
}

module.exports = keepAlive