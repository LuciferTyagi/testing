 const express = require('express');
 const app = express();

 app.use("/",(req,res) =>{
    res.send("server is runnisadngff")
 })

 app.listen(6001,console.log("server is started"));