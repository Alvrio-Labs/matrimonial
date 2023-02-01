/* eslint-disable no-invalid-this */
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = require('socket.io');
// const message = require('../controllers/message.controller');

app.set('port', 4000);

io.on('connection', (socket) => {
  socket.on('join', async (chat) => {
    socket.join(chat);
    io.emit('chat_joined');
    console.log('chat joined');
  });

  socket.on('message', async (data) => {
    io.emit('new_message', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });

  socket.on('chat_message', function (data) {
    // eslint-disable-next-line no-param-reassign
    data.username = this.username;
    socket.broadcast.emit('chat_message', data);
  });

  socket.on('disconnect', function (data) {
    socket.broadcast.emit('user_leave', this.username);
  });
});


server.listen(4000);
