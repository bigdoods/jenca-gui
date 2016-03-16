import React from 'react'
import { Textfield } from 'react-mdl';

export default function CredentialsForm({title, handleSubmit}) {

	var props = {
		email:null,
		password:null
	}

	function changeHandler(field){
		return function(e){
			if(e){
				props[field] = e.target.value
			}
		}
	}

	var emailChangeHandler = changeHandler('email')
	var passwordChangeHandler = changeHandler('password')

	function clickSubmitButton(){
		handleSubmit && handleSubmit(props)
	}

  return (
  	
    <div className="mdl-card mdl-shadow--6dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h2 className="mdl-card__title-text">{title}</h2>
      </div>
        <div className="mdl-card__supporting-text">
        <form action="#">
          <Textfield
				    onChange={emailChangeHandler}
				    label="Email..."
				    style={{width: '100%'}} />
				   <Textfield
					    onChange={passwordChangeHandler}
					    label="Password..."
					    type="password"
					    style={{width: '100%'}} />
        </form>
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <button onClick={clickSubmitButton} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">{title}</button>
      </div>
    </div>

  	
  )
}

