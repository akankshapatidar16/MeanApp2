const express = require('express')
const booksController = require('../controller/books.controller')
const router = express.Router();


router.get('/all', booksController.getBooks)

router.get('/:id', booksController.getOneBook)

router.get('/country/:country', booksController.getBooksByCountry)

router.get('/', booksController.getBooksByQuery)

router.delete('/:id', booksController.deleteBook)

router.put('/:id', booksController.editBook)

exports.router = router
//module.exports = router