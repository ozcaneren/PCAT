const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const photoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', photoSchema);

//create a photo
Photo.create({
  title: 'My first photo',
  description: 'This is my first photo',
});

//read a photo
//Photo.find({}, (err, data) => {
//});