const user = require("../models/userModel")

let users = user.allUsers();

const isConnected = async (req, res, next) => {

    if (!req.session.isConnected) {
        console.log("user isn't connected")
        res.redirect('/user')
    }
    else {
        let user = await users.find((u) => {
            if (u.id == req.session.userId)
                return u;
        })
        console.log("user" + user.username + " isconnected")
        next()
    }
}
module.exports = { isConnected }