import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { fetchProjects } from '../actions/project'
import { fetchUser } from '../actions/user'

export function Home({ number, increase, decrease, fetchProjects, fetchUser }) {

  return (
    <div>
      Welcome to Jenca.
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease, fetchProjects, fetchUser }
)(Home)
