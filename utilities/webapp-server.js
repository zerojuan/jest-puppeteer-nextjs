// This will serve as athe starting server

const next = require('next');
const express = require('express');
const path = require('path');

const server = express();
const app = next({
  dev: true,
  dir: path.join(__dirname, '../')
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3030, err => {
    if (err) throw err;
    console.log('> Local App Server started on 3030');
  });
});
