import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import assert from 'assert'

import * as actions from '../../actions/project'
import { PROJECTS_API } from '../../api/urls'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('project actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates PROJECTS_RECEIVE when fetching projects has been done', (done) => {

    // this intercepts HTTP requests for us
    nock('http://127.0.0.1')
      .get('/v1/projects')
      .reply(200, { 
        "id":123,
        "name":"First project"
      })

    const expectedActions = [{
      type: actions.PROJECTS_REQUEST
    }, (incomingAction) => {
      if (incomingAction.type !== actions.PROJECTS_RECEIVE) {
        throw Error('Expected action of type PROJECTS_RECEIVE');
      }

      assert.deepEqual(incomingAction.data, { 
        "id":123,
        "name":"First project"
      }, 'expected data to be equal')
     
    }]

    const store = mockStore({ projects: [] }, expectedActions, done)
    store.dispatch(actions.fetchProjects())
  })
})
