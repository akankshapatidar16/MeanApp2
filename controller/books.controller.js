const booksService = require('../service/books.service')

exports.getBooks = async function (req, res) {
    console.log('books contoller getBooks')
    let page = req.query.page;
    let limit = req.query.limit;
    let userResponse = await booksService.getAllBooks(page, limit)   
    res.send(userResponse)
}

exports.getOneBook = async function (req, res) {
    let id = req.params.id;
    console.log('books contoller getOneBook, id=', id)
    let userResponse = await booksService.getBookById(id)   
    res.send(userResponse)
}

exports.getBooksByQuery = async function (req, res) {
    let country = req.query.country;
    let author = req.query.author;
    //console.log('books contoller getBooksByCountry, country=', country)
    if(country !== undefined) {
        let query = {"country":country}
         userResponse = await booksService.getBooksByQuery(query)   
    }
    else if(author!==undefined) {
        let query = {"author":author}
         userResponse = await booksService.getBooksByQuery(query)   
    }
    res.send(userResponse)
}

exports.getBooksByCountry = async function (req, res) {
    let country = req.params.country;
    console.log('books contoller getBooksByCountry, country=', country)
    let userResponse = await booksService.getBooksByCountry(country)   
    res.send(userResponse)
}