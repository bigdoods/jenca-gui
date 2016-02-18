import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Menubar from '../components/Menubar'

export class MenubarContainer extends Component {
  render() {
    return (
      <Menubar links={this.props.links} />
    )
  }
  
}

function mapStateToProps(state) {
  var loggedIn = state.user && state.user.loaded && state.user.data

  var links = loggedIn ? [{
    url:'/',
    title:'Home'
  },{
    url:'/foo',
    title:'Foo'
  },{
    url:'/bar',
    title:'Bar'
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
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenubarContainer)
