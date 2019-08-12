const express = require('express')
const bodyParser = require('body-parser')
const user = require('./router/user.router')
const books = require('./router/books.router')
const path = require('path')
const app = express()
const port = 9000

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public/angular')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','content-type');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, HEAD, POST, PUT, DELETE')
    next();
});

app.use('/user', user.router)
app.use('/books', books.router)

app.get('/', (req, res)=>{
    res.send("Hello from MeanApp2's index.js")
})


app.listen(port, ()=>{
    console.log(`MeanApp2 listening on port: ${port}`)
})