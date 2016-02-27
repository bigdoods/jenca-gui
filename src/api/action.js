import { json } from './ajax'

export default function apiAction(url, actions){

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
      status: response.status,
      headers: response.headers
    }
  }

  return json(url, [
    dataRequest,
    dataReceive,
    dataError
  ])
}