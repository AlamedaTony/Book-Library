const Author = require('../models/author');
const Book = require('../models/book');

module.exports = {
    index,
    new: newAuthor,
    create,
    addToAuthor,
}

async function index(req, res) {
    const authors = await Author.find({}).sort("name");
    res.render('authors/index', { title: 'All Authors', authors });
  }


async function addToAuthor(req, res) {
    const book = await Book.findById(req.params.id);
    book.author = req.body.authorId;
    await book.save();
    res.redirect(`/books/${book._id}`);
  }


async function newAuthor(req, res) {
    const authors = await Author.find({}).sort('name');
    res.render('authors/new', { title: 'Add Author', authors });
  }


async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    await Author.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/authors/new');
}