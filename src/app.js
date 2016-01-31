import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Layout from './components/Layout'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('app')

function render() {
  ReactDOM.render(
    <Layout />,
    rootEl  
  )
}

render()
store.subscribe(render)

/*
<Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
*/