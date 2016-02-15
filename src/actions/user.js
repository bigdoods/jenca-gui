import apiAction from '../api/action'
import { USER_API } from '../api/urls'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_RECEIVE = 'USER_RECEIVE'
export const USER_ERROR = 'USER_ERROR'

export function fetchUser() {

  return apiAction(USER_API, [
    USER_REQUEST,
    USER_RECEIVE,
    USER_ERROR
  ])

}