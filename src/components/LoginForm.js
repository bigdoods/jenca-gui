import React from 'react'
import { Grid, Cell } from 'react-mdl'

import CredentialsForm from './CredentialsForm'

function reverseMode(mode){
  return mode == 'login' ? 'register' : 'login'
}

export default function LoginForm(props) {

  var form = props.mode == 'register' ? 
    <CredentialsForm 
      title="Register" 
      email={props.email} 
      password={props.password} 
      updateEmail={props.updateEmail} 
      updatePassword={props.updatePassword} 
      handleSubmit={props.handleRegister} 
      error={props.registerError} /> :
    <CredentialsForm 
      title="Login" 
      email={props.email} 
      password={props.password} 
      updateEmail={props.updateEmail} 
      updatePassword={props.updatePassword} 
      handleSubmit={props.handleLogin} 
      error={props.loginError} />

  var switchMode = reverseMode(props.mode)

  function handleSwitchClick(){
    props.handleSwitch(switchMode)
  }

  return (
  	<div className="mdl-layout mdl-js-layout mdl-color--white-100" style={{textAlign:'center'}}>
      <main className="mdl-layout__content">

        <Grid>
          <Cell col={12} align="middle">
            {form}
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12} align="middle">
            <a style={{color:'#999'}} href="#" onClick={handleSwitchClick}>Click here to {switchMode}</a>
          </Cell>
        </Grid>
    
        
      </main>
    </div>
  )
}

