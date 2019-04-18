const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.get('/status', (req, res) => {
  res.send({
    message: 'hello word'
  });
});

app.listen(process.env.PORT || 8081);
