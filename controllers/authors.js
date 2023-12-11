const Author = require('../models/author');
const Book = require('../models/book');

module.exports = {
    index,
    new: newAuthor,
    create,
    addToAuthor,
}

async function index(req, res) {
    // const books = [{title: "mock book 1", pages: 200, author: {name: "john smith", born: new Date().toISOString()}}]
    const authors = await Author.find({}).sort("name");
    res.render('authors/index', { title: 'All Authors', authors });
  }


async function addToAuthor(req, res) {
    const book = await Book.findById(req.params.id);
    book.author.push(req.body.authorId);
    await book.save();
    res.redirect(`/books/${book._id}`);
  }


async function newAuthor(req, res) {
    //Sort authors by their name
    const authors = await Author.find({}).sort('name');
    res.render('authors/new', { title: 'Add Author', authors });
  }


async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    await Author.create(req.body);
   // console.log(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/authors/new');
}