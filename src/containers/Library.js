import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-mdl'
import { fetchLibrary } from '../actions/library'
import { createProject } from '../actions/createproject'
import LibraryComponent from '../components/Library'


class Library extends Component {
  render() {

    var props = this.props
    if(!props.loaded){
      return <Spinner />
    }

    if(props.error){
      return (
        <div>
          error: {props.error}
        </div>
      )
    }

    return (
      <LibraryComponent {...props} />
    )
  }

  componentWillMount() {
    this.props.loadLibrary()
  }
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
      if (app.type == "run") {
        dispatch(createProject(app))
      } else if (app.type == "link") {
        window.open(app.url)
      }

    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)
