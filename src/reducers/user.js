import { USER_REQUEST, USER_RECEIVE, USER_ERROR } from '../actions/user'
import { LOGOUT_RECEIVE } from '../actions/logout'
import { LOGIN_RECEIVE } from '../actions/login'
import apiReducer from '../api/reducer'

const reducer = apiReducer([
  USER_REQUEST,
  USER_RECEIVE,
  USER_ERROR
], {}, function(state, action){
  switch (action.type) {
    case LOGOUT_RECEIVE:
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        error: null,
        data: null,
        statusCode:null,
        headers:{}
      })
    case LOGIN_RECEIVE:
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        error: null,
        data: null,
        statusCode:null,
        headers:{}
      })
    default:
      return null
  }
})

export default reducer
