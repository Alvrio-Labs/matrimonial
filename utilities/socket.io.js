/* eslint-disable camelcase */
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
  });
  socket.on('join', async (chat) => {
    socket.join(chat);
    io.emit('chat_joined');
  });
  socket.on('message', async (data) => {
    io.emit('new_message', data);
  });
  socket.on('typing', (chat_id) => socket.in(chat_id).emit('typing'));
  socket.on('chat_message', (data) => {
    socket.emit('chat_message', data);
  });
  socket.on('disconnect', (data) => {
    socket.emit('user_leave', data.first_name);
  });
  socket.on('online', (userId) => {
    socket.emit('is_online', userId);
  });
});

server.listen(4000);

