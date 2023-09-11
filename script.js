const socket = new WebSocket("ws://localhost:8080");
const button = document.getElementById("send-button");
const messagesDiv = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");

button.addEventListener("click", () => {
    socket.send(messageInput.value);
});

socket.addEventListener("message", (event) => {
    const msg = event.data;
    console.log(msg);
    messagesDiv.innerHTML += `<div>${msg}</div>`;
});