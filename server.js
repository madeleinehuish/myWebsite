'use strict';

//express
const express = require('express');
const app = express();

//webpack
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
        colors: true
    }
  }
));
app.use(require('webpack-hot-middleware')(compiler));

//path
// The path module exposes a join method that allows us to chain together
// variables to create a file path. The join method is used instead of
// specifying a full file path, as this avoids issues of operating systems
// working differently with forward slashes and backslashes.
const path = require('path');

//static files
app.use(express.static('public'));

// app.use('/assets', express.static('app/assets'));

 // This will tell Express to match any routes for files found in this folder
 // and deliver the files directly to the browser. This should be done before
 // any other routes are defined and before the server is set up to listen.
app.use(express.static(path.join(__dirname, 'public')));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// errors
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

// set port and serve
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server running... Listening on port ', port);
});

module.exports = app;
