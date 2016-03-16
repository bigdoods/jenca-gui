import { json } from './ajax'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  data: null,
  statusCode:null,
  headers:{}
}

export default function apiReducer(actions = [], maps = {}, filter){
  return function update(state = initialState, action) {
    if(filter){
      var ret = filter(state, action)
      if(ret) return ret
    }
    switch (action.type) {
      case actions[0]:
        var ret = Object.assign({}, state, {
          loading: true
        })
        if(maps.request){
          return maps.request(ret, action)
        }
        else{
          return ret
        }
      case actions[1]:
        var ret = Object.assign({}, state, {
          loading: false,
          loaded: true,
          error: null,
          data: action.data,
          statusCode: action.statusCode,
          headers: action.headers
        })
        if(maps.receive){
          return maps.receive(ret, action)
        }
        else{
          return ret
        }
      case actions[2]:
        var ret = Object.assign({}, state, {
          loading: false,
          loaded: true,
          error: action.error,
          data: action.data,
          statusCode: action.statusCode,
          headers: action.headers
        })
        if(maps.error){
          return maps.error(ret, action)
        }
        else{
          return ret
        }
      default:
        return state
    }
  }
}