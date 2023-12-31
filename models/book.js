const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { 
        type: String, 
        required: true },
    pages: { 
        type: Number, 
        required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author"
  },
 } ,{
    timestamps: true
  });

module.exports = mongoose.model('Book', bookSchema);

