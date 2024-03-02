document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.textContent = messageText;
            messageElement.classList.add("message");
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
