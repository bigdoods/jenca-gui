import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import { fetchProjects } from '../actions/project'
import { fetchUser } from '../actions/user'
import LoginForm from '../components/LoginForm'

export function Home({ number, increase, decrease, fetchProjects, fetchUser }) {

  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease, fetchProjects, fetchUser }
)(Home)
