import React from 'react'
import { Grid, Cell } from 'react-mdl'

import RunButton from "./RunButton";

export default function LibraryItem(props) {
  return (
	<div style={{margin:'10px'}}>
		<div className="demo-card-square mdl-card mdl-shadow--2dp">
		  <img src={'thumbnails/' + props.name + '.png'} />
		  <div className="mdl-card__title mdl-card--expand">
		    <h2 className="mdl-card__title-text">{props.name}</h2>
		  </div>
		  <div className="mdl-card__supporting-text">
		    {props.description}
		  </div>
		  <div style={{marginBottom:'10px'}}>
		  	<RunButton 
		  		app={props.app} 
		  		handleRun={props.handleRun} />
		  </div>
		</div>
    </div>
  )
}