const express = require('express');

const app = express();

app.use(require('./routes'));

var port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server online! (:")
});

module.exports = app;
