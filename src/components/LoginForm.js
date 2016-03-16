import React from 'react'
import { Grid, Cell } from 'react-mdl';

import CredentialsForm from './CredentialsForm'

export default function LoginForm({loginMode, handleSwitch, handleRegister, handleLogin}) {

  var form = loginMode == 'login' ? 
    <CredentialsForm title="Login" handleSubmit={handleLogin} /> :
    <CredentialsForm title="Register" handleSubmit={handleRegister} />


  return (
  	<div className="mdl-layout mdl-js-layout mdl-color--white-100" style={{textAlign:'center'}}>
      <main className="mdl-layout__content">

        <Grid>
          <Cell col={12} align="middle">
            <div style={{textAlign:'center'}}>
              {form}
            </div>
          </Cell>
        </Grid>
    
        
      </main>
    </div>
  	
  )
}

