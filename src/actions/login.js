import apiAction from '../api/action'
import { LOGIN_API } from '../api/urls'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function loginUser(credentials = {}) {

  return apiAction({
    url:LOGIN_API,
    method: 'post',
    body: JSON.stringify(credentials)
  }, [
    LOGIN_REQUEST,
    LOGIN_RECEIVE,
    LOGIN_ERROR
  ])

}

export function loginUserError(error = '') {
  
  return {
    type:LOGIN_ERROR,
    headers:{},
    statusCode:500,
    error:error
  }

}