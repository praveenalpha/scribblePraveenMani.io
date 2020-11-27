socket.on("recieve-msg", function(msg){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = msg;
    messages.appendChild(newDiv);
})