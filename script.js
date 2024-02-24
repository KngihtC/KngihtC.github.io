document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    const messagesContainer = document.getElementById('messages-container');
    const newMessage = document.createElement('div');
    newMessage.textContent = `${username}: ${message}`;
    messagesContainer.appendChild(newMessage);

    document.getElementById('message').value = '';
});