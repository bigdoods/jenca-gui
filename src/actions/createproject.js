import request from 'superagent'
import { push } from 'react-router-redux'

import { PROJECTS_API } from '../api/urls'

export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST'
export const CREATE_PROJECT_RECEIVE = 'CREATE_PROJECT_RECEIVE'
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'

export function createProject(app) {

  var id = new Date().getTime()
  var projectName = app.name + ' ' + id
  return function(dispatch){
    setTimeout(function(){
      dispatch({
        type:CREATE_PROJECT_REQUEST,
        app:app
      })


      var req = request
        .post(PROJECTS_API)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          name:projectName,
          app:app
        })
      

      req.end(function(err, res){

        if(err){
          return dispatch({
            type:CREATE_PROJECT_ERROR,
            error:err.toString()
          })
        }

        var project = res.body

        var req2 = request
          .post(PROJECTS_API + '/' + project.id + '/status')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .send({
            running:true
          })

        req2.end(function(err, res){

          if(err){
            return dispatch({
              type:CREATE_PROJECT_ERROR,
              error:err.toString()
            })
          }

          
          dispatch(push('/'))

        })

      

      })


    }, 1)
  }
}