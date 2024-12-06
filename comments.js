// Create web server with express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./comments.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});

