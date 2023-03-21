const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// EJS
app.set('view engine', 'ejs');


const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

// Static Files
app.use(express.static('public'));
app.use(myLogger);

// Routes
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});
