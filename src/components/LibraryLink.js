import React from 'react'
import { Grid, Cell } from 'react-mdl'
import LinkButton from "./LinkButton";

export default function LibraryLink(props) {
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
		  	<LinkButton 
		  		app={props.app} 
		  		handleRun={props.handleRun} />
		  </div>
		</div>
    </div>
  )
}
