import fetch from 'isomorphic-fetch'

export default function getApi(url, actions){

  var requestAction, receiveAction, errorAction

  [requestAction, receiveAction, errorAction] = actions

  return function(dispatch){

    dispatch(requestAction())

    return fetch(url)
      .then(response =>
        response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {

        if (!response.ok) {
          return dispatch(errorAction(json, response))
        }

        return dispatch(receiveAction(json, response))

      })
  }
}