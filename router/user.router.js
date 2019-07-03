const express = require('express')
const userController = require('../controller/user.controller')
const router = express.Router();


router.get('/', (req, res)=>{
    res.send("Hello from user router")
})

router.post('/authenticate', userController.authenticate)
exports.router = router
//module.exports = router