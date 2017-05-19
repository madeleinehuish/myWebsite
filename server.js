'use strict';

const express = require('express');
const app = express();
const path = require('path');

const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
        colors: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.use(express.static('public'));

// app.use(express.static(path.join('public')));
//
// app.use('/assets', express.static('app/assets'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.statusText);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server running... Listening on port ', port);
});

module.exports = app;
