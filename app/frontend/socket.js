socket.on("recieve-msg", function(obj){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = obj.name + ": " + obj.message;
    messages.appendChild(newDiv);
})