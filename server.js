// server.js
// where your node app starts

const request = require("request");
const express = require("express");
const app = express();


app.get("/", (_, r) => r.sendFile(__dirname+"/index.html")).listen(process.env.PORT);