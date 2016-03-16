import apiAction from '../api/action'
import { LOGOUT_API } from '../api/urls'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_RECEIVE = 'LOGOUT_RECEIVE'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

export function logoutUser() {

  return apiAction({
    url:LOGOUT_API,
    method: 'post',
    body: JSON.stringify({})
  }, [
    LOGOUT_REQUEST,
    LOGOUT_RECEIVE,
    LOGOUT_ERROR
  ])

}