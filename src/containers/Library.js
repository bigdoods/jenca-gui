import React from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-mdl'

import { fetchLibrary } from '../actions/library'
import { createProject } from '../actions/createproject'

import LibraryComponent from '../components/Library'

export function Library(props) {

  if(!props.loaded && !props.loading){
    props.loadLibrary()
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
    <LibraryComponent {...props} />
  )
}


function mapStateToProps(state) {

  var data = Object.keys(state.library.data || {}).map(function(key){
    return state.library.data[key]
  })

  return {
    loaded:state.library.loaded,
    loading:state.library.loading,
    error:state.library.error,
    data:data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadLibrary:function(){
      dispatch(fetchLibrary())
    },
    handleRun:function(app){
      dispatch(createProject(app))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)