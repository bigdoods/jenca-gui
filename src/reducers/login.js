import { LOGIN_REQUEST, LOGIN_RECEIVE, LOGIN_ERROR } from '../actions/login'
import { REGISTER_RECEIVE } from '../actions/register'

import apiReducer from '../api/reducer'

const reducer = apiReducer([
  LOGIN_REQUEST,
  LOGIN_RECEIVE,
  LOGIN_ERROR
], {
  error:function(state, action){
    if(state.data && state.data.title){
      state.error = state.data.title
    }
    return state
  }
}, function(state, action){
  switch (action.type) {
    case REGISTER_RECEIVE:
      return Object.assign({}, state, {
        error: 'You are registered - click login'
      })
    default:
      return null
  }
})

export default reducer
