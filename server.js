var path = require('path')

//step 1: require express
var express = require('express')
//step 2: variable for express
var app = express() 
var app1 = express()
app.get('/', function(req, res){
    //looking for a request sent by the user
    res.send('hello')
})

app.use()

app.get('/areyouthere', function(req,res){
    res.send('No I am not')
})
app1.get('/', function(req,res){
    res.send("wassssuppp")
})
app.get('/giveMelt', function(req,res){
    res.send('Okay here it is')
})

app.get('/wikime', function(req,res){
    res.redirect('https://www.wikipedia.org')
})

//step 3: start server; standard express port is 3000
app.listen(3000)
app1.listen(3001)
