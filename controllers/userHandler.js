const user = require("../models/userModel")
const bcrypt = require("bcrypt")
const { randomUUID } = require("crypto")
const saltRounds = 10

let users = user.allUsers();


const register = async (req, res) => {

    const { username, pwd, email } = req.body;
    let newEmail = "";
    if (!username || !pwd)
        return res.status(400).send({ message: "username and pwd are required" })

    if (!email)
        newEmail = username + "@gmail.com";
    else
        newEmail = email

    const checkUser = await users.find((u) => {
        if (u.username === username)
            return u;
    });

    if (checkUser) {
        return res.status(404).json({ "message": "username: " + username + " already exists" })
    }

    const newPwd = bcrypt.hashSync(pwd, saltRounds);


    const newUser = new user.User(randomUUID(), username, newEmail, newPwd)

    newUser.save();

    res.json('added to users');
}

const login = async (req, res) => {

    const { username, pwd } = req.body;

    if (!username || !pwd)
        return res.status(400).send({ message: "username and pwd are required" })

    const checkUser = await users.find((u) => {
        if (u.username === username)
            return u;
    });

    if (!checkUser) {
        return res.status(404).json({ "message": "username: " + username + " nor found" })
    }

    const validPassword = bcrypt.compareSync(pwd, checkUser.pwd);
    if (!validPassword) return res.status(400).send('Invalid Password.')

    req.session.isConnected = true;
    req.session.username = checkUser.username;
    req.session.userId = checkUser.id;

    return res.redirect("/");
}




module.exports = { login, register }