const Book = require('../models/book');
const Author = require('../models/author');

module.exports = {
    index,

}

async function index(req, res) {
    const books = [{title: "demon slayer", pages: 200, author: {name: "john smith", born: new Date().toISOString()}}]
    // const books = await Book.find({});
    res.render('books/index', { title: 'All Books', books });
  }

