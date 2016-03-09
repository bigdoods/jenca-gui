var http = require('http');
var ecstatic = require('ecstatic');
 
var args = require('minimist')(process.argv, {
  alias:{
    p:'port',
    d:'directory'
  },
  default:{
    port:process.env.PORT || 8080,
    directory:process.env.DIRECTORY || '/app/dist'
  }
})

var fileserver = ecstatic({ root: args.directory })
http.createServer(function(req, res){
  console.log(req.url)
  fileserver(req, res)
}).listen(args.port);
 
console.log('Listening on: ' + args.port);