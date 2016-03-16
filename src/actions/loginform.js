export const SWITCH_LOGIN_MODE = 'SWITCH_LOGIN_MODE'

export function switchLoginMode(mode) {
  return {
    type: SWITCH_LOGIN_MODE,
    mode: mode
  }
}