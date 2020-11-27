const msgInput = document.querySelector(".text-area");
const sendBtn = document.querySelector(".send-btn");
const messages = document.querySelector(".messages");
sendBtn.addEventListener("click", ()=>{
    let msg = msgInput.value;
    if(msg){
        var newDiv = document.createElement("div");
        var textNode = document.createTextNode("msg");
        newDiv.innerHTML = msg;
        messages.appendChild(newDiv);
        msgInput.value = "";
        socket.emit("message-send", msg);
    }
})