import request from 'superagent'

/*

  generic wrapper function to perform an ajax request
  
  you pass opts - which are passed to isomorphic-fetch
  if opts is a string then opts.url = opts

  actions is an array of functions each returning an action

  the first is for the request
  the second is for the response
  the third is for an error

*/

export default function ajax(opts, actions){

  var requestAction, receiveAction, errorAction

  if(!actions || actions.length<3){
    throw new Error('actions array must contain 3 functions')
  }

  [requestAction, receiveAction, errorAction] = actions

  opts = processOpts(opts)

  return function(dispatch){

    dispatch(requestAction())

    var req = request[opts.method](opts.url)

    req = req
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')

    if(opts.body){
      req = req.send(opts.body)
    }

    req.end(function(err, res){

      if(err){
        dispatch(errorAction(err.toString(), res))
      }
      else{
        dispatch(receiveAction(res.body, res)) 
      }
      
    })

  }
}

export function json(opts, actions){
  opts = processOpts(opts)
  opts.json = true
  return ajax(opts, actions)
}

export function processOpts(opts){
  if(typeof(opts)==='string') opts = {
    url:opts
  }
  opts.method = opts.method || 'get'
  return opts
}