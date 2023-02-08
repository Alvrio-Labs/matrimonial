require('dotenv').config();
require('dotenv').config({ path: './.env.development' });
require('dotenv').config({ path: './.env.test' });
require('dotenv').config({ path: './.env.production' });
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.SERVER_PORT || 3011;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const io = require('socket.io')(server);
const { router } = require('./routes/index');
// const connectToSocket = require('./utilities/socket.io');

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.use(express.static(`${__dirname}/public`));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
    // socket.to(chat_id).emit('message', msg);
  });
});

