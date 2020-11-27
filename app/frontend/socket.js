socket.on("recieve-msg", function(obj){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = obj.name + ": " + obj.message;
    messages.appendChild(newDiv);
})
socket.on("new-user", function(name){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = name + " JOINED THE GAME";
    newDiv.classList.add("joined");
    messages.appendChild(newDiv);
})
