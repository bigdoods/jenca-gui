import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import { fetchUser } from '../actions/user'
import Layout from '../components/Layout'

export class App extends Component {
  render() {

    if(this.props.shouldLoadUser){
      console.log('loading user data for the ifrst time')
    }
    return (
      <Layout loggedIn={this.props.loggedIn}>
        {this.props.children}
      </Layout>
    )
  }
  
}

function mapStateToProps(state) {
  var userState = state.user || {}
  var loggedIn = userState && userState.loaded && userState.data
  var shouldLoadUser = !userState.loaded && !userState.loading
  
  return {
    loggedIn:loggedIn,
    shouldLoadUser:shouldLoadUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser:function(){
      dispath(fetchUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
