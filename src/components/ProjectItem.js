import React from 'react'

export default function ProjectItem() {
  return (
  	<div>
		<div className="demo-card-wide mdl-card mdl-shadow--2dp">
		  <div className="mdl-card__title">
		    <h2 className="mdl-card__title-text">Project Name</h2>
		  </div>
		  <div className="mdl-card__supporting-text">
		    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		    Mauris sagittis pellentesque lacus eleifend lacinia...
		  </div>
		  <div className="mdl-card__actions mdl-card--border">
		    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
		      Explore Project
		    </a>
		  </div>
		  <div className="mdl-card__menu">
		    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
		      <i className="material-icons">share</i>
		    </button>
		  </div>
		</div>
	</div>
  )
}
