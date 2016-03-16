import React from 'react'
import { connect } from 'react-redux'

export function Home() {

  return (
    <div>
      this is the home
    </div>
  )
}


function mapStateToProps(state) {
  
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)