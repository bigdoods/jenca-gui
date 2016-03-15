import React from 'react'

import ProjectItem from "./ProjectItem"
import AddProject from "./AddProject"

export default function Projects() {
  return (
	  <div>
	  	Current projects:

	  	  <div className="demo-grid-ruler mdl-grid">
	        <ProjectItem />
	        <ProjectItem />
	        <ProjectItem />
	      </div>

	      <div>
	      	<AddProject />
	      </div>
	  </div>
  )
}
