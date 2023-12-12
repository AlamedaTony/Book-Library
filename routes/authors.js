const express = require('express');
const router = express.Router();
const authorsCtrl = require('../controllers/authors');
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/authors", authorsCtrl.index);
router.get('/authors/new', ensureLoggedIn, authorsCtrl.new);
router.post("/authors", ensureLoggedIn, authorsCtrl.create);
router.post("/books/:id/authors", ensureLoggedIn, authorsCtrl.addToAuthor);

module.exports = router;
