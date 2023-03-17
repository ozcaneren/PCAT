const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});
