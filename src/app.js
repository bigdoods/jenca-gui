import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { syncHistory, routeReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

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

  history/logging
  
*/
const history = createHistory()
const routerMiddleware = syncHistory(history)
const loggerMiddleware = createLogger()

/*

  reducer
  
*/
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
})

var middlewareArray = [
  thunkMiddleware,
  routerMiddleware
]

if(process.env.NODE_ENV==='development'){
  middlewareArray.push(loggerMiddleware)
}

/*

  store
  
*/
const finalCreateStore = compose(
  applyMiddleware.apply(null, middlewareArray)
)(createStore)

const store = finalCreateStore(reducer)

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
