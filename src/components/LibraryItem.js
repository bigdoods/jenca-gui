import React from 'react'

import RunButton from "./RunButton";

export default function LibraryItem() {
  return (
	<div>
		<div className="demo-card-square mdl-card mdl-shadow--2dp">
		  <img src="thumbnails/bimserver.png" />
		  <div className="mdl-card__title mdl-card--expand">
		    <h2 className="mdl-card__title-text">App Name</h2>
		  </div>
		  <div className="mdl-card__supporting-text">
		    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		    Aenan convallis.
		  </div>
		  <div className="mdl-card__actions mdl-card--border">
		    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
		      View Full Description
		    </a>
		  </div>
		  <RunButton />
		</div>
    </div>
  )
}
