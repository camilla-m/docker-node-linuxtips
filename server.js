'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Punk do DevOps GITLAB!');
});

app.get('*', (req, res) => {
  res.send('errrrouuuuu!', 404);
});

app.listen(PORT, HOST);