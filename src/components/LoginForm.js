import React from 'react'
import CredentialsForm from './CredentialsForm'

export default function LoginForm({loginMode, handleSwitch, handleRegister, handleLogin}) {


  return (
  	<div className="mdl-layout mdl-js-layout mdl-color--white-100">
      <main className="mdl-layout__content">

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
          
              <CredentialsForm title="Login" handleSubmit={handleLogin} />

              <CredentialsForm title="Register" handleSubmit={handleRegister} />
          
          </div>
        </div>
        
      </main>
    </div>
  	
  )
}

