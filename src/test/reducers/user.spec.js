import expect from 'expect'
import reducer from '../../reducers/user'
import * as types from '../../actions/user'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      loading: false,
      loaded: false,
      error: null,
      data: null
    })
  })

  it('should handle USER_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: types.USER_REQUEST
      })
    ).toEqual({
      loading: true,
      loaded: false,
      error: null,
      data: null
    })
  })

  it('should handle USER_RECEIVE', () => {
    expect(
      reducer({
        loading: true,
        loaded: false,
        error: null,
        data: null
      }, {
        type: types.USER_RECEIVE,
        data:[{id:40,name:'bob'},{id:67,name:'alice'}]
      })
    ).toEqual({
      loading: false,
      loaded: true,
      error: null,
      data: [{id:40,name:'bob'},{id:67,name:'alice'}]
    })
  })

  it('should handle USER_ERROR', () => {
    expect(
      reducer({
        loading: true,
        loaded: false,
        error: null,
        data: null
      }, {
        type: types.USER_ERROR,
        error:'the user is not logged in'
      })
    ).toEqual({
      loading: false,
      loaded: true,
      error: 'the user is not logged in',
      data: null
    })
  })
})