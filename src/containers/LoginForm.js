import React from 'react'
import { connect } from 'react-redux'
import { switchLoginMode, updateEmail, updatePassword } from '../actions/loginform'
import { registerUser, registerUserError } from '../actions/register'
import { loginUser, loginUserError } from '../actions/login'
import LoginForm from '../components/LoginForm'

export function Home(props) {

  return (
    <div>
      <div id="jenca-logo-login">
        <img src={"/elements/jenca-blk.png"} alt="jenca" width="100px" />
      </div>
      <LoginForm {...props} />
    </div>
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
      if(!credentials.email || !credentials.password){
        dispatch(registerUserError('please enter an email and password'))
      }
      else{
        dispatch(registerUser(credentials))
      }
    },
    handleLogin:function(credentials){
      if(!credentials.email || !credentials.password){
        dispatch(loginUserError('please enter an email and password'))
      }
      else{
        dispatch(loginUser(credentials))
      }
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
