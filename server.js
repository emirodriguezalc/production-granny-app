require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const port = process.env.PORT || 3002;

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('connected to db')
);

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app were connecting to
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/posts', postRoute);

app.use('/api/user', authRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => console.log('Server Up'));
