import apiAction from '../api/action'
import { REGISTER_API } from '../api/urls'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_RECEIVE = 'REGISTER_RECEIVE'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export function registerUser(credentials = {}) {
  
  return apiAction({
    url:REGISTER_API,
    method: 'post',
    body: JSON.stringify(credentials)
  }, [
    REGISTER_REQUEST,
    REGISTER_RECEIVE,
    REGISTER_ERROR
  ])

}