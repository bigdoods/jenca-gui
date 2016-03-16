import { REGISTER_REQUEST, REGISTER_RECEIVE, REGISTER_ERROR } from '../actions/register'
import apiReducer from '../api/reducer'

const reducer = apiReducer([
  REGISTER_REQUEST,
  REGISTER_RECEIVE,
  REGISTER_ERROR
])

export default reducer
