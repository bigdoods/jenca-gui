import { json } from './ajax'

export default function apiAction(opts, actions){

  var [requestAction, receiveAction, errorAction] = actions

  function dataRequest() {
    return {
      type: requestAction
    }
  }

  function dataReceive(json, response) {
    return {
      type: receiveAction,
      data: json,
      headers: response.headers
    }
  }

  function dataError(error, response) {
    return {
      type: errorAction,
      error: error,
      statusCode: response.statusCode,
      headers: response.headers
    }
  }

  return json(opts, [
    dataRequest,
    dataReceive,
    dataError
  ])
}