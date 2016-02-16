import expect from 'expect'
import reducer from '../../reducers/project'
import * as types from '../../actions/project'

describe('projects reducer', () => {
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

  it('should handle PROJECTS_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: types.PROJECTS_REQUEST
      })
    ).toEqual({
      loading: true,
      loaded: false,
      error: null,
      data: null
    })
  })

  it('should handle PROJECTS_RECEIVE', () => {
    expect(
      reducer({
        loading: true,
        loaded: false,
        error: null,
        data: null
      }, {
        type: types.PROJECTS_RECEIVE,
        data:[{id:10,name:'apples'},{id:11,name:'oranges'}]
      })
    ).toEqual({
      loading: false,
      loaded: true,
      error: null,
      data: [{id:10,name:'apples'},{id:11,name:'oranges'}]
    })
  })

  it('should handle PROJECTS_ERROR', () => {
    expect(
      reducer({
        loading: true,
        loaded: false,
        error: null,
        data: null
      }, {
        type: types.PROJECTS_ERROR,
        error:'oranges are orange'
      })
    ).toEqual({
      loading: false,
      loaded: true,
      error: 'oranges are orange',
      data: null
    })
  })
})