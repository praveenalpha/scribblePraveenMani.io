//npm init -y
//npm install express
//npm install socket.io
//npm install nodemon
const app = require('express')(); // creates server
const http = require('http').createServer(app); //
const io = require('socket.io')(http); // enables socket.io
const userDB = [];
//when a socket is created(when someone opens a new live server) , it connects to app.js
io.on('connection', function(socket){
  console.log(`${socket.id} a user connected`);
  
  socket.on("message-send", function(msg){
    let id = socket.id;
    let name;
    for(let i=0;i<userDB.length ;i++){
      if(id == userDB[i].id){
        name = userDB[i].name;
      }
    }
    socket.broadcast.emit("recieve-msg", {name:name,message:msg});
  });
  socket.on("new-user-connected", function(name){
    userDB.push({id: socket.id ,name: name});
    socket.broadcast.emit("new-user" , name);
    console.log("2");
  });
});

http.listen(5001, () => {
  console.log("listening on *:3000");
});