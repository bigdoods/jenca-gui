import getApi from './api'
import { PROJECTS_API } from '../apiurls'

export const PROJECTS_REQUEST = 'PROJECTS_REQUEST'
function projectsRequest() {
  return {
    type: PROJECTS_REQUEST
  }
}

export const PROJECTS_RECEIVE = 'PROJECTS_RECEIVE'
function projectsReceive(json) {
  return {
    type: PROJECTS_RECEIVE,
    data: json
  }
}

export const PROJECTS_ERROR = 'PROJECTS_ERROR'
function projectsError(error) {
  return {
    type: PROJECTS_ERROR,
    error: error
  }
}

export function fetchProjects() {

  return getApi(PROJECTS_API, [
    projectsRequest,
    projectsReceive,
    projectsError
  ])

}