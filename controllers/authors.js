const Author = require('../models/author');
const Book = require('../models/book');

module.exports = {
    new: newAuthor,

}




async function newAuthor(req, res) {
    //Sort authors by their name
    const authors = await Authors.find({}).sort('name');
    res.render('authors/new', { title: 'Add Author', authors });
  }


