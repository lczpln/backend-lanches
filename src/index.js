const express = require('express');

const app = express();

app.use(require('./routes'));

const port = 3000 || process.env.port;

app.listen(port, () => {
  console.log("Server online! (:")
});

module.exports = app;