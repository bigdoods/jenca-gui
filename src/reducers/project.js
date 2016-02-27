import { PROJECTS_REQUEST, PROJECTS_RECEIVE, PROJECTS_ERROR } from '../actions/project'
import apiReducer from '../api/reducer'

const reducer = apiReducer([
  PROJECTS_REQUEST,
  PROJECTS_RECEIVE,
  PROJECTS_ERROR
])

export default reducer
