export const SWITCH_LOGIN_MODE = 'SWITCH_LOGIN_MODE'

export function switchLoginMode(mode) {
  return {
    type: SWITCH_LOGIN_MODE,
    mode: mode
  }
}

export const UPDATE_EMAIL = 'UPDATE_EMAIL'

export function updateEmail(value) {
  return {
    type: UPDATE_EMAIL,
    value: value
  }
}


export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'

export function updatePassword(value) {
  return {
    type: UPDATE_PASSWORD,
    value: value
  }
}

