const express = require('express')
const res = require('express/lib/response')
const expressInit = express()
const checkUrl = require("./middleWare")
const router = express.Router();
expressInit.use(checkUrl)
expressInit.get("/",(req, res)=>{
    res.sendFile(__dirname + "/component/Home.html")
})
expressInit.get("/about",(req, res)=>{
    res.sendFile(__dirname + "/component/About.html")
})
expressInit.get("/contact",(req, res)=>{
    res.sendFile(__dirname + "/component/Contact.html")
})
expressInit.use('/', router)
expressInit.listen(2000);
