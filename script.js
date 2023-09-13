const socket = new WebSocket("ws://localhost:8080");
const button = document.getElementById("send-button");
const messagesDiv = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const userUid = new Date().getTime()

button.addEventListener("click", () => {
    const message = messageInput.value;
    socket.send(JSON.stringify({ message, userUid }));
    messageInput.value = "";
});

socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
    displayMessage({message: data.message, userId: data.userUid});
});

function displayMessage({ message, userId }) {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML += `<strong>${userId === userUid ? "You" : "Other"}:</strong> ${message}`;
    messagesDiv.appendChild(messageDiv);
}
