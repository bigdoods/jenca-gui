import { USER_REQUEST, USER_RECEIVE, USER_ERROR } from '../actions/user'
import apiReducer from '../api/reducer'

const reducer = apiReducer([
  USER_REQUEST,
  USER_RECEIVE,
  USER_ERROR
])

export default reducer
