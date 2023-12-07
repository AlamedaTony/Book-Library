const express = require('express');
const router = express.Router();
const authorsCtrl = require('../controllers/authors');

router.get('/authors/new', authorsCtrl.new);


module.exports = router;

