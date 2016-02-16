import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

export default function setup(component) {
  let props = {
    addTodo: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(component)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}