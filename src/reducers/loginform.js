import { SWITCH_LOGIN_MODE, UPDATE_EMAIL, UPDATE_PASSWORD } from '../actions/loginform'

const initialState = {
  mode: 'login',
  email: null,
  password: null
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case SWITCH_LOGIN_MODE:
      return Object.assign({}, state, {
        mode:action.mode
      })
    case UPDATE_EMAIL:
      return Object.assign({}, state, {
        email:action.value
      })
    case UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password:action.value
      })
    default:
      return state
  }
}
