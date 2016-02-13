import { PROJECTS_REQUEST, PROJECTS_RECEIVE, PROJECTS_ERROR } from '../actions/project'

const initialState = {
  loading: false,
  error: null,
  data: null
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case PROJECTS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      })
    case PROJECTS_RECEIVE:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        data: action.data
      })
    case PROJECTS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        data: null
      })
    default:
      return state
  }
}
