import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { syncHistory, routeReducer } from 'react-router-redux'

/*

  reducers
  
*/
import * as reducers from './reducers'

/*

  containers
  
*/
import App from "./containers/App";
import Home from "./containers/Home";
import Foo from "./components/Foo";
import Bar from "./components/Bar";

/*

  history
  
*/
const history = createHistory()
const middleware = syncHistory(history)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
})

/*

  store
  
*/
const finalCreateStore = compose(
  applyMiddleware(middleware)
)(createStore)
const store = finalCreateStore(reducer)
middleware.listenForReplays(store)

/*

  routes
  
*/
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('mount')
)
