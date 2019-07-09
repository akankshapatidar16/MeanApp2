const express = require('express')
const bodyParser = require('body-parser')
const user = require('./router/user.router')
const books = require('./router/books.router')
const app = express()
const port = 9000

app.use(bodyParser.json())

app.use('/user', user.router)
app.use('/books', books.router)

app.get('/', (req, res)=>{
    res.send("Hello from MeanApp2's index.js")
})


app.listen(port, ()=>{
    console.log(`MeanApp2 listening on port: ${port}`)
})