const Book = require('../models/book');
const Author = require('../models/author');

module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook,
    edit,
    update,
}

async function index(req, res) {
    // const books = [{title: "mock book 1", pages: 200, author: {name: "john smith", born: new Date().toISOString()}}]
    const books = await Book.find({}).populate("author");
    console.log(books);
    res.render('books/index', { title: 'All Books', books });
  }

async function show(req, res) {
    const book = await Book.findById(req.params.id).populate("author");
    console.log(book);
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

async function deleteBook(req,res) {
  try {
    await Book.findByIdAndDelete(req.params.id)
  } catch(err) {
    console.log(err);
  }
  res.redirect("/books");
}

async function edit(req,res) {
  const book = await Book.findById(req.params.id);
  res.render("books/edit", { title: "Edit Book", book  });
  }

async function update(req,res) {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.redirect(`/books/${book._id}`);
  } catch (err) {
    console.log(err);
    res.redirect("/books");
  }
}