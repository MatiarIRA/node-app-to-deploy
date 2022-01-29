const mongodb = require('mongodb');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is the home page!!');
});



app.listen(port, () => {
  console.log('Running on port ' + port);
});




