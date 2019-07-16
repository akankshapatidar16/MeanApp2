const userService = require('../service/user.service')

exports.authenticate = async function (req, res) {
    console.log('user contoller, req.body.username :', req.body.username)
    let isAuthenticated = await userService.authenticate(req.body)
    let userResponse = JSON.stringify({ "authenticated": isAuthenticated })
    res.send(userResponse)
}

exports.register = async function (req, res) {
    console.log('user contoller, req.body.username :', req.body.username)
    let userResponse = await userService.registerUser(req.body)
    //console.log("userresponse", userResponse)
    // let userResponse = JSON.stringify({ "authenticated": isAuthenticated })
    //if(userResponse.result.)
    if (userResponse !== "error") {
        res.status(201)
        res.send(userResponse)
    }
}