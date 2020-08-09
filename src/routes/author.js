const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('get Author')
})

module.exports = router

const express = require('express');
const router = express.Router();

const AuthorController = require('../controllers/authorController');

router
    .get('/', AuthorController.getAuthors)
    .post('/', AuthorController.saveAuthor)

module.exports = router;