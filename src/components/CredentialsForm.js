import React from 'react'
import { Textfield } from 'react-mdl';

export default function CredentialsForm({title, error, handleSubmit, updateEmail, updatePassword, email, password}) {

	function changeHandler(handler){
		return function(e){
			if(e){
				handler(e.target.value)
			}
		}
	}

	var emailChangeHandler = changeHandler(updateEmail)
	var passwordChangeHandler = changeHandler(updatePassword)

	function clickSubmitButton(){
		handleSubmit && handleSubmit({
      email:email,
      password:password
    })
	}

  var errordiv = error ? (
    <div className="mdl-card__actions mdl-card--border" style={{textAlign:'center', color:'#880000'}}>
      {error}
    </div>
  ) : null

  return (
  	
    <div className="mdl-card mdl-shadow--6dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h2 className="mdl-card__title-text">{title}</h2>
      </div>
        <div className="mdl-card__supporting-text">
        <form action="#" id={title}>
          <Textfield
            id={"email-" + title}
				    onChange={emailChangeHandler}
				    label="Email..."
            value={email}
				    style={{width: '100%'}} />
				  <Textfield
            id={"password-" + title}
				    onChange={passwordChangeHandler}
				    label="Password..."
				    type="password"
            value={password}
				    style={{width: '100%'}} />
        </form>
      </div>
      {errordiv}
      <div className="mdl-card__actions mdl-card--border" style={{textAlign:'left'}}>
        <button onClick={clickSubmitButton} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">{title}</button>
      </div>
    </div>
    
  )
}
