import { SWITCH_LOGIN_MODE } from '../actions/loginform'

const initialState = {
  mode: 'login'
}

export default function update(state = initialState, action) {
  if(action.type === SWITCH_LOGIN_MODE) {
    return Object.assign({}, state, {
      mode:action.mode
    })
  }
  return state
}
