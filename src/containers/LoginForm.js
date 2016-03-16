import React from 'react'
import { connect } from 'react-redux'

import { switchLoginMode, updateEmail, updatePassword } from '../actions/loginform'
import { registerUser } from '../actions/register'
import { loginUser } from '../actions/login'

import LoginForm from '../components/LoginForm'

export function Home(props) {

  return (
    <LoginForm {...props} />
  )
}


function mapStateToProps(state) {

  return {
    email:state.loginform.email,
    password:state.loginform.password,
    mode:state.loginform.mode,
    loginError:state.login.error,
    registerError:state.register.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSwitch:function(mode){
      dispatch(switchLoginMode(mode))
    },
    handleRegister:function(credentials){
      dispatch(registerUser(credentials))
    },
    handleLogin:function(credentials){
      dispatch(loginUser(credentials))
    },
    updateEmail:function(val){
      dispatch(updateEmail(val))
    },
    updatePassword:function(val){
      dispatch(updatePassword(val))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)