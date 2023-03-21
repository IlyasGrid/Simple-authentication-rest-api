const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require("./routes/userRoute")
const cors = require("cors");
const path = require('path');
const session = require('express-session');
const { isConnected } = require('./middlewares/checkConnected');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9090;

app.use(cors());
app.use(cors({
    origin: '*'
  }));
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'my secret session ilyas suiiii',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true
    }
}))

app.use((req, res, next) => {
    if (!req.session.count)
        req.session.count = 1
    else
        req.session.count++
    // console.log(req.session)
    next()
})





app.use("/user", userRouter)
app.use("/", isConnected, (req, res) => {
    return res.json("hellloooooowww "+req.session.username);
})


app.listen(port, () => {
    console.log("listenning on port :" + port);
})
