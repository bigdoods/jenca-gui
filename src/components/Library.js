import React from 'react'

import LibraryItem from "./LibraryItem"

export default function Library(props) {

  return (
  	<div>
  		<div className="demo-grid-ruler mdl-grid">
        {
          props.data.map(function(item){
            return (
              <div key={item.id} style={{textAlign:'center'}}>
                <LibraryItem {...item} />
              </div>
            )
          })
        }
      </div>
	</div>
  )
}
