const mongoClient = require('mongodb').MongoClient;
const config = require('../config/database')
const ObjectID = require('mongodb').ObjectID;

exports.getAllBooks = async function (page, limit) {
    console.log('in books service getAllBooks')
    try {
        const client = await mongoClient.connect(config.database, {useNewUrlParser: true})
        console.log("Connected to database");
        let result = await client.db().collection("books").find().toArray();
        client.close();
        return result;
    } catch (error) {
        console.log('db error:', error)
    }
}

exports.getBookById = async function (id) {
    console.log('in books service getAllBooks')
    try {
        const client = await mongoClient.connect(config.database, {useNewUrlParser: true})
        console.log("Connected to database, id=", id);        
        let query= {"_id": ObjectID(id)};              
        let result = await client.db().collection("books").findOne(query);  
        client.close();     
       return result;
    } catch (error) {
        console.log('db error:', error)
    }
}

exports.getBooksByCountry = async function (country) {
    console.log('in books service getBooksByCountry')
    try {
        const client = await mongoClient.connect(config.database, {useNewUrlParser: true})
        console.log("Connected to database");
        let query= {"country": country};              
        let result = await client.db().collection("books").find(query).toArray();
        client.close();
        return result;
    } catch (error) {
        console.log('db error:', error)
    }
}

exports.getBooksByQuery = async function (query) {
    console.log('in books service getBooksByCountry')
    try {
        const client = await mongoClient.connect(config.database, {useNewUrlParser: true})
        console.log("Connected to database");
        //let query= {"country": query};    //TODO author or country!          
        let result = await client.db().collection("books").find(query).toArray();
        client.close();
        return result;
    } catch (error) {
        console.log('db error:', error)
    }
}