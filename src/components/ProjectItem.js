import React from 'react'

export default function ProjectItem(props) {

	var nodePort = props.runState.data.service.spec.ports[0].nodePort

  return (
  	<div id="project-item">
		<div className="demo-card-wide mdl-card mdl-shadow--2dp">
		  <div className="mdl-card__title">
		    <h2 className="mdl-card__title-text">{props.name}</h2>
		  </div>
		  <div className="mdl-card__supporting-text">
		    {props.app.description}
		  </div>
		  <div className="mdl-card__actions mdl-card--border">
		    <a href={"http://dev.jenca.org:" + nodePort} target="_blank" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
		      Open Application
		    </a>
		  </div>
		</div>
	</div>
  )
}
