const path = require('path')
const express = require('express')
const ecstatic = require('ecstatic')

const app = express()

function getJsonFile(path){
  var content = require(path)
  return function(res, res){
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(content))
  }
}

app.get('/v1/projects', getJsonFile('./test/fixtures/projects.json'))
app.get('*', ecstatic({ root: __dirname + '/dist' }))

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
