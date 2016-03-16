const path = require('path')
const express = require('express')
const ecstatic = require('ecstatic')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(cookieParser('cookiesecret'))
app.use(bodyParser.json())

var users = {}

function login(email, password){
  var user = users[email]
  return user && user.password==password
}

function register(email, password){
  users[email] = password
}

function getJsonFile(path){
  var content = require(path)
  return function(res, res){
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(content))
  }
}

app.get('/v1/auth/status', function(req, res){
  if(req.cookies.loggedIn){
    res.json({
      is_authenticated:true,
      email:req.cookies.loggedIn
    })
  }
  else{
    res.json({
      is_authenticated:false
    })
  }
  
})

app.post('/v1/auth/login', function(req, res){
  console.log('-------------------------------------------');
  console.dir(req.body)

  if(login(req.body.email, req.body.password)){
    var hour = 60 * 60 * 1000
    res.cookie('loggedIn', req.body.email, { maxAge: hour })
    res.json(req.body)
  }
  else{
    res.statusCode = 404
    res.json({
      title:'Not logged in',
      detail:'Not logged in'
    })
  }
  
})

app.post('/v1/auth/register', function(req, res){
  console.log('-------------------------------------------');
  console.dir(req.body)

  users[req.body.email] = req.body.password

  res.statusCode = 201
  res.json(req.body)
  
})


app.post('/v1/auth/logout', function(req, res){

  res.clearCookie('loggedIn');

  res.json({})
  
})

app.get('/v1/projects', getJsonFile('./src/test/fixtures/projects.json'))
app.get('*', ecstatic({ root: __dirname + '/dist' }))

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
