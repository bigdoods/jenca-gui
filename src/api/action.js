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
      headers: response.headers,
      statusCode: response.statusCode,
    }
  }

  function dataError(error, response) {
    return {
      type: errorAction,
      data: response.body,
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