import React from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-mdl'

import { fetchProjects } from '../actions/project'

import ProjectsComponent from '../components/Projects'

export function Projects(props) {

  if(!props.loaded && !props.loading){
    props.loadProjects()
  }

  if(!props.loaded){
    return <Spinner />
  }

  if(props.error){
    return (
      <div>error: {props.error}</div>
    )
  }

  return (
    <ProjectsComponent {...props} />
  )
}


function mapStateToProps(state) {

  var data = Object.keys(state.library.data || {}).map(function(key){
    return state.library.data[key]
  })

  return {
    loaded:state.project.loaded,
    loading:state.project.loading,
    error:state.project.error,
    data:state.project.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProjects:function(){
      dispatch(fetchProjects())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)