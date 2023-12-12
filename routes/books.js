const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", booksCtrl.index);
router.get("/new", ensureLoggedIn, booksCtrl.new);
router.get("/:id", booksCtrl.show);
router.post("/", ensureLoggedIn, booksCtrl.create);
router.delete("/:id", ensureLoggedIn, booksCtrl.delete);
router.get("/:id/edit", ensureLoggedIn, booksCtrl.edit);
router.put("/:id", ensureLoggedIn, booksCtrl.update);

module.exports= router;