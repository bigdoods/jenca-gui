import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Layout from '../components/Layout'

export class App extends Component {
  render() {
    return (
      <Layout push={this.props.push}>
        {this.props.children}
      </Layout>
    )
  }
  
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    ...routeActions
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
