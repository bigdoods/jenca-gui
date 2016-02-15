import { json } from './ajax'

const initialState = {
  loading: false,
  error: null,
  data: null
}

export default function apiReducer(actions = []){
  return function update(state = initialState, action) {
    switch (action.type) {
      case actions[0]:
        return Object.assign({}, state, {
          loading: true
        })
      case actions[1]:
        return Object.assign({}, state, {
          loading: false,
          error: null,
          data: action.data
        })
      case actions[2]:
        return Object.assign({}, state, {
          loading: false,
          error: action.error,
          data: null
        })
      default:
        return state
    }
  }
}