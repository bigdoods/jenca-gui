import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import assert from 'assert'

import * as actions from '../../actions/user'
import { USER_API } from '../../api/urls'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('user actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates USER_RECEIVE when fetching user has been done', (done) => {

    // this intercepts HTTP requests for us
    nock('http://127.0.0.1')
      .get('/v1/user')
      .reply(200, { 
        "id":678,
        "name":"Test User"
      })

    const expectedActions = [{
      type: actions.USER_REQUEST
    }, (incomingAction) => {
      if (incomingAction.type !== actions.USER_RECEIVE) {
        throw Error('Expected action of type USER_RECEIVE');
      }

      assert.deepEqual(incomingAction.data, { 
        "id":678,
        "name":"Test User"
      }, 'expected data to be equal')
     
    }]

    const store = mockStore({ projects: [] }, expectedActions, done)
    store.dispatch(actions.fetchUser())
  })
})
