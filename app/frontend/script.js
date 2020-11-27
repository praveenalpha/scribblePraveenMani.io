const msgInput = document.querySelector(".text-area");
const sendBtn = document.querySelector(".send-btn");
const messages = document.querySelector(".messages");
let name  = prompt("ENTER YOUR NAME!!");
socket.emit("new-user-connected", name);

sendBtn.addEventListener("click", ()=>{
    let msg = msgInput.value;
    if(msg){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "you: " + msg;
        messages.appendChild(newDiv);
        msgInput.value = "";
        socket.emit("message-send", msg);
    }
})