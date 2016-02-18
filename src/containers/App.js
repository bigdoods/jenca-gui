import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Layout from '../components/Layout'

export class App extends Component {
  render() {
    return (
      <Layout loggedIn={this.props.loggedIn}>
        {this.props.children}
      </Layout>
    )
  }
  
}

function mapStateToProps(state) {
  var loggedIn = state.user && state.user.loaded && state.user.data
  
  return {
    loggedIn:loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
