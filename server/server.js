const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

app.get('/', (req, res) => {
  res.send('<h1>Multiplayer API v1.0.0</h1>');
});
app.get('/test', (req, res) => {
  res.send('<h1>Hello test</h1>');
});
app.get('/users', (req, res) => {
  res.json(users);
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
