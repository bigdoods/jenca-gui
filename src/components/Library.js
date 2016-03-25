import React from 'react'
import LibraryItem from "./LibraryItem"

export default function Library(props) {
  return (
  	<div>
  		<div className="demo-grid-ruler mdl-grid" id="library-div">
        {
          props.data.map(function(item){
            return (
              <div key={item.id} style={{textAlign:'center'}}>
                <LibraryItem 
                  handleRun={props.handleRun} 
                  name={item.name} 
                  description={item.description} 
                  app={item} />
              </div>
              
              <div key={item.id} style={{textAlign:'center'}}>
                <LibraryLink
                  handleRun={props.handleRun} 
                  name={item.name} 
                  description={item.description} 
                  app={item} />
              </div>
            )
          })
        }

	  </div>
  )
}
