import React from 'react'
import { connect } from 'react-redux'

import { switchLoginMode } from '../actions/login'
import LoginForm from '../components/LoginForm'

export function Home(props) {

  return (
    <LoginForm {...props} />
  )
}


function mapStateToProps(state) {

  return {
    mode:state.login.mode,
    loginError:state.loginrequest.error,
    registerError:state.registerrequest.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSwitch:function(mode){
      dispatch(switchLoginMode(mode))
    },
    handleRegister:function(details){
      console.log('-------------------------------------------');
      console.log('register')
      console.dir(details)
    },
    handleLogin:function(details){
      console.log('-------------------------------------------');
      console.log('login')
      console.dir(details)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)