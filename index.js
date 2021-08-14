const express = require('express')
const app = express()

app.get('/', function(req,res){
res.send('hi welcome to this server')
})

app.listen(4000);     //Listen on a port 