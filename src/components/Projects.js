import React from 'react'

export default function Projects() {
  return (
	  <div>
	  	Here are your projects:

		<ul class="demo-list-item mdl-list">
		  <li class="mdl-list__item">
		    <span class="mdl-list__item-primary-content">
		      Project Name
		    </span>
		  </li>
		  <li class="mdl-list__item">
		    <span class="mdl-list__item-primary-content">
		      Project Name
		    </span>
		  </li>
		  <li class="mdl-list__item">
		    <span class="mdl-list__item-primary-content">
		      Project Name
		    </span>
		  </li>
		</ul>

	  	<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
		  <i className="material-icons">add</i>
		</button>
	  </div>
  )
}
