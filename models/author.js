const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  born: Date,
  wiki: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', authorSchema);