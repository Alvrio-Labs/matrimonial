require('dotenv').config();
require('dotenv').config({ path: './.env.development' });
require('dotenv').config({ path: './.env.test' });
require('dotenv').config({ path: './.env.production' });
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   // origin: '*',
//   credentials: true,
// };

const app = express();
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next();
// });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.header({ 'Access-Control-Allow-Origin': '*' });

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
const PORT = process.env.SERVER_PORT || 3011;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const http = require('http').Server(app);
const io = require('socket.io')(server);

const { init } = require('./utilities/socket.io');

const { router } = require('./routes/index');

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

app.get('/chat', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.use(express.static(`${__dirname}/public`));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
// app.use(cors(corsOptions));

init(http);

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
    // socket.to(chat_id).emit('message', msg);
  });
});

