const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = 4000

mongoose.connect('mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      dbName: 'todo',
      useNewUrlParser : true,
      useUnifiedTopology: true
    
    })
    .then(()=> {
    console.log('Mongodb connected……');
    });

app.get('/', function(req,res){
res.send('hi welcome to the server')
})

app.listen(PORT, function(){console.log('server started at 4000')});     //Listen on a port 