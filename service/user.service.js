const mongoClient = require('mongodb').MongoClient;
const config = require('../config/database')

exports.authenticate = async function (query) {
    console.log('in user service authenticate. database: ', config)
    try {
        const client = await mongoClient.connect(config.database, {useNewUrlParser: true})
        console.log("Connected to database");
        let result = await client.db().collection("users").find(query).toArray();
        if (result.length > 0) {
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        console.log('db error:', error)
    }
}