const mongoose = require('mongoose');
const PointSchema = require('./utils/PontSchema');

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere', // ponto de longitude e latitude (x,y)
  },
});

module.exports = mongoose.model('Dev', DevSchema);
