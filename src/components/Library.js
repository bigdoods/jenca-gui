import React from 'react'

import LibraryItem from "./LibraryItem"

export default function Library() {
  return (
  	<div>
  		<div className="demo-grid-ruler mdl-grid">
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
      </div>
	</div>
  )
}
