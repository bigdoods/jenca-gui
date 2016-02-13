import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { fetchProjects } from '../actions/project'

function Home({ number, increase, decrease, fetchProjects }) {

  return (
    <div>
      Some state changes HELLO:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
      <button onClick={() => fetchProjects()}>Load Data</button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease, fetchProjects }
)(Home)
