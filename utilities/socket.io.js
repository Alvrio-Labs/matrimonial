/* eslint-disable no-invalid-this */
const http = require('http');
const express = require('express');
const io = require('socket.io');
const db = require('../models/index');

const app = express();
const server = http.createServer(app);
// const message = require('../controllers/message.controller');
const { User } = db;

app.set('port', 4000);

io.on('connection', (socket) => {
  socket.on('handshake', async () => {
    socket.emit(User.id);
    console.log('handshake');
  });
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
