const socket = io();
let name;
const textarea = document.querySelector('#textarea');
const messageArea = document.querySelector('.message__area');
do {
  name = prompt('Please enter your name:');
} while (!name);


function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}
function appendMessage(msg, type) {
  const mainDiv = document.createElement('div');
  const className = type;
  mainDiv.classList.add(className, 'message');

  const markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}
function sendMessage(message) {
  const msg = {
    user: name,
    message: message.trim(),
  };
  appendMessage(msg, 'outgoing');
  textarea.value = '';
  scrollToBottom();
  socket.emit('message', msg);
}
textarea.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    sendMessage(e.target.value);
  }
});

socket.on('message', (msg) => {
  appendMessage(msg, 'incoming');
  scrollToBottom();
});
