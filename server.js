var path = require('path')

//step 1: require express
var express = require('express')
//step 2: variable for express
var app = express() 
var app1 = express()
//linking html 1: static(path.join())
var bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res){
    //looking for a request sent by the user
    res.send('hello')
})



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

app.get('/whattimeisit', function(req,res){
    res.redirect('https://www.whattimeisitrightnow')
})

app.get('/knocknock', function(req,res){
    res.send('Who is there?')
})

//linking html 2: sendFile(path,options)
app.get('/sendPage', function(req,res){
    res.sendFile('/public/fun.html', {root:__dirname})
})


app.get('/htmlme', function(req,res){
    res.sendFile('/public/index.html', {root:__dirname})
})

var userArr = []
var obj = {name : 'dude', age : 507}
app.get('/wantUsers', function(req,res){
    userArr.push(obj)
    res.send(userArr)
})

app.post('/posty', function(req, res){
    userArr.push(req.body)
    res.send('You did it!')
})

//step 3: start server; standard express port is 3000

app.listen(3000)
app1.listen(3001)
