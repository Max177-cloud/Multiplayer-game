const express = require('express');
const { createServer } = require('node:http');
const fs = require('fs');

const app = express();
const server = createServer(app);

const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

//static server
app.use(express.static('public'));

app.get('/', (req, res) => {
  const page = fs.readFileSync('./pages/index.html', 'utf-8');
  res.send(page);
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
