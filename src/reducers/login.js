import { LOGIN_REQUEST, LOGIN_RECEIVE, LOGIN_ERROR } from '../actions/login'
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
})

export default reducer
