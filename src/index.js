var http = require("http");
let express = require("express");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!1"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
