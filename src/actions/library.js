import apiAction from '../api/action'
import { LIBRARY_API } from '../api/urls'

export const LIBRARY_REQUEST = 'LIBRARY_REQUEST'
export const LIBRARY_RECEIVE = 'LIBRARY_RECEIVE'
export const LIBRARY_ERROR = 'LIBRARY_ERROR'

export function fetchLibrary() {

  return apiAction(LIBRARY_API, [
    LIBRARY_REQUEST,
    LIBRARY_RECEIVE,
    LIBRARY_ERROR
  ])

}