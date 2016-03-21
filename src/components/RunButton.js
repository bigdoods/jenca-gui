import React from 'react'

export default function RunButton(props) {

  function handleClick(e){
    if(e) e.preventDefault()
    props.handleRun(props.app)
  }

  return (
	  <div>
	    <button onClick={handleClick} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  		  Start Project
  		</button>
	  </div>
  )
}
