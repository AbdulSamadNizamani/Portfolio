const express = require("express");
const config = require("dotenv").config;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = require("./router/Contactdata.js")


config({
    path:'./.env.local'
})
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use('/contactauth',router);

module.exports = app