const express = require('express');
const path = require('path');
const { register, login } = require('../controllers/userHandler');
const route = express.Router();

route.get("/",(req, res) => {    
    return res.sendFile(path.join(__dirname, '../views/login.html'));
})

route.post("/login", login)
route.post("/register", register)

route.get("/logout", (req, res) => {
    const username = req.session.username;
    req.session.destroy();
    res.status(200).json({"message":`good by ${username} `});
})


module.exports =  route  