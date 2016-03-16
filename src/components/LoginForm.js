import React from 'react'
import { Grid, Cell } from 'react-mdl';

import CredentialsForm from './CredentialsForm'

function reverseMode(mode){
  return mode == 'login' ? 'register' : 'login'
}

export default function LoginForm({mode, handleSwitch, handleRegister, handleLogin, loginError, registerError}) {

  var form = mode == 'register' ? 
    <CredentialsForm title="Register" handleSubmit={handleRegister} error={registerError} /> :
    <CredentialsForm title="Login" handleSubmit={handleLogin} error={loginError} />

  var switchMode = reverseMode(mode)

  function handleSwitchClick(){
    handleSwitch(switchMode)
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

