const userService = require('../service/user.service')

exports.authenticate = async function (req, res) {
    console.log('user contoller, req.body.username :', req.body.username)
    let isAuthenticated = await userService.authenticate(req.body)
    let userResponse = JSON.stringify({ "authenticated": isAuthenticated })
    res.send(userResponse)
}