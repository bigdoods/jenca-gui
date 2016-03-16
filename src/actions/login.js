import apiAction from '../api/action'
import { LOGIN_API } from '../api/urls'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function loginUser() {

  return apiAction(LOGIN_API, [
    LOGIN_REQUEST,
    LOGIN_RECEIVE,
    LOGIN_ERROR
  ])

}