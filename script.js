const socket = new WebSocket("ws://localhost:8080");
const button = document.getElementById("send-button");
const messagesDiv = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const nicknameInput = document.getElementById("nickname-input")
const userUid = new Date().getTime()
let userNickname = ""
button.addEventListener("click", () => {
    const message = messageInput.value;
    socket.send(JSON.stringify({ message, userUid, userNickname }));
    messageInput.value = "";
});

socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
    displayMessage({message: data.message, userId: data.userUid, userNickname: data.userNickname});
});

function displayMessage({ message, userId, userNickname }) {
    console.log(userNickname);
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML += `<strong>${userId === userUid ? "You" : userNickname}:</strong> ${message}`;
    messagesDiv.appendChild(messageDiv);
}

nicknameInput.oninput =function(e) {
    userNickname = e.target.value
}
