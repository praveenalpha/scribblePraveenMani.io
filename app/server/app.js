//npm init -y
//npm install express
//npm install socket.io
//npm install nodemon
const app = require('express')(); // creates server
const http = require('http').createServer(app); //
const io = require('socket.io')(http); // enables socket.io

//when a socket is created(when someone opens a new live server) , it connects to app.js
io.on('connection', function(socket){
  console.log(`${socket.id} a user connected`);
});

http.listen(5001, () => {
  console.log("listening on *:3000");
});