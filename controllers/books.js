const Book = require('../models/book');
const Author = require('../models/author');

module.exports = {
    index,
    show,
    new: newBook,
    create,
}

async function index(req, res) {
    // const books = [{title: "mock book 1", pages: 200, author: {name: "john smith", born: new Date().toISOString()}}]
    const books = await Book.find({});
    res.render('books/index', { title: 'All Books', books });
  }

async function show(req, res) {
    const book = await Book.findById(req.params.id).populate("author");
    //console.log(book);
    const authors = await Author.find({ _id: { $nin: book.author } }).sort('name');
    res.render('books/show', { title: 'Book Detail', book, authors });
  }

function newBook (req,res) {
    res.render("books/new", { title: "Add Book", errorMsg: "" });
  }

  async function create(req, res) {
    try {
      // Update this line because now we need the _id of the new movie
      const book = await Book.create(req.body);
      // Redirect to the new movie's show functionality 
      res.redirect(`/books/${book._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('books/new', { errorMsg: err.message });
    }
  }