import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import { fetchUser } from '../actions/user'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import LoginForm from '../components/LoginForm'

export class App extends Component {
  render() {

    if(this.props.shouldLoadUser){
      this.props.fetchUser()
    }

    if(!this.props.userLoaded){
      return <Loading />
    }
    else if(this.props.userLoggedin){
      return (
        <Layout loggedIn={this.props.loggedIn}>
          {this.props.children}
        </Layout>
      )
    }
    else {
      return <LoginForm />
    }
  }
  
}

function mapStateToProps(state) {
  var userState = state.user || {}
  var data = userState.data || {}
  var loggedIn = userState && userState.loaded && data.is_authenticated
  var shouldLoadUser = !userState.loaded && !userState.loading
  var userLoaded = userState.loaded

  return {
    userLoaded:userLoaded,
    userLoggedin:loggedIn,
    shouldLoadUser:shouldLoadUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser:function(){
      dispatch(fetchUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
