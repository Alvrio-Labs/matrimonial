const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('user_join', function (data) {
    // eslint-disable-next-line no-invalid-this
    this.username = data;
    socket.broadcast.emit('user_join', data);
  });

  socket.on('chat_message', function (data) {
    // eslint-disable-next-line no-param-reassign, no-invalid-this
    data.username = this.username;
    socket.broadcast.emit('chat_message', data);
  });

  socket.on('disconnect', function (data) {
    // eslint-disable-next-line no-invalid-this
    socket.broadcast.emit('user_leave', this.username);
  });
});
