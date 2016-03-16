import { LOGIN_REQUEST, LOGIN_RECEIVE, LOGIN_ERROR } from '../actions/login'
import apiReducer from '../api/reducer'

const reducer = apiReducer([
  LOGIN_REQUEST,
  LOGIN_RECEIVE,
  LOGIN_ERROR
])

export default reducer
