import { LIBRARY_REQUEST, LIBRARY_RECEIVE, LIBRARY_ERROR } from '../actions/library'
import { CREATE_PROJECT_REQUEST, CREATE_PROJECT_RECEIVE, CREATE_PROJECT_ERROR } from '../actions/createproject'
import apiReducer from '../api/reducer'

const reducer = apiReducer([
  LIBRARY_REQUEST,
  LIBRARY_RECEIVE,
  LIBRARY_ERROR
], {}, function(state, action){
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      })
    case CREATE_PROJECT_ERROR:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: action.error
      })
    default:
      return null
  }
})

export default reducer
