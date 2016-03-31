import React from 'react'
import { Grid, Cell } from 'react-mdl'
import RunButton from "./RunButton";

const buttonTitles = {
	run:"Add to Project",
	link:"Open App"
}

export default function LibraryItem(props) {

  var title = buttonTitles[props.app.type] || "click me"

  return (
	<div id="library-item">
		<div className="demo-card-square mdl-card mdl-shadow--2dp">
		  <img src={'thumbnails/' + props.name + '.png'} />
		  <div className="mdl-card__title mdl-card--expand">
		    <h2 className="mdl-card__title-text">{props.name}</h2>
		  </div>
		  <div className="mdl-card__supporting-text">
		    {props.description}
		  </div>
		  <div id="run-button">
		  	<RunButton 
		  		app={props.app} 
		  		handleRun={props.handleRun}
		  		title={title} />
		  </div>
		</div>
    </div>
  )
}
