const path = require('path')
const express = require('express')
const ecstatic = require('ecstatic')

const app = express()

app.get('*', ecstatic({ root: __dirname + '/dist' }))

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
