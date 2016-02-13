import { json } from '../api/ajax'
import { PROJECTS_API } from '../api/urls'

export const PROJECTS_REQUEST = 'PROJECTS_REQUEST'
function projectsRequest() {
  return {
    type: PROJECTS_REQUEST
  }
}

export const PROJECTS_RECEIVE = 'PROJECTS_RECEIVE'
function projectsReceive(json, response) {
  return {
    type: PROJECTS_RECEIVE,
    data: json,
    headers: response.headers
  }
}

export const PROJECTS_ERROR = 'PROJECTS_ERROR'
function projectsError(error, response) {
  return {
    type: PROJECTS_ERROR,
    error: error,
    status: response.status,
    headers: response.headers
  }
}

export function fetchProjects() {

  return json(PROJECTS_API, [
    projectsRequest,
    projectsReceive,
    projectsError
  ])

}