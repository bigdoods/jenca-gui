import React from 'react'
import ProjectItem from "./ProjectItem"

export default function Projects(props) {
  return (
	  <div>
  		<div className="demo-grid-ruler mdl-grid">
        {
          props.data.map(function(item){
            return (
              <div key={item.id} style={{textAlign:'center'}}>
                <ProjectItem {...item} />
              </div>
            )
          })
        }
      </div>
	</div>
  )
}
