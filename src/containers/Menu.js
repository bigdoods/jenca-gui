import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { logoutUser } from '../actions/logout'

import Menu from '../components/Menu'

export class MenuContainer extends Component {
  render() {
    return (
      <Menu links={this.props.links} handleLogout={this.props.handleLogout} />
    )
  }
  
}

function mapStateToProps(state) {
  var loggedIn = state.user && state.user.loaded && state.user.data

  var links = loggedIn ? [{
    url:'/',
    title:'Home'
  },{
    url:'/library',
    title:'Library'
  },{
    url:'/projects',
    title:'Projects'
  }] : [{
    url:'/',
    title:'Login'
  }]

  return {
    loggedIn:loggedIn,
    links:links
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogout:function(){
      dispatch(logoutUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer)
