import apiAction from '../api/action'
import { PROJECTS_API } from '../api/urls'

export const PROJECTS_REQUEST = 'PROJECTS_REQUEST'
export const PROJECTS_RECEIVE = 'PROJECTS_RECEIVE'
export const PROJECTS_ERROR = 'PROJECTS_ERROR'

export function fetchProjects() {

  return apiAction(PROJECTS_API, [
    PROJECTS_REQUEST,
    PROJECTS_RECEIVE,
    PROJECTS_ERROR
  ])

}