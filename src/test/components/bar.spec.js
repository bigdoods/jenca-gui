import expect from 'expect'
import React from 'react'
import setup from '../utils'
import Bar from '../../components/Bar'

describe('Bar Component', () => {
  
  it('should render correctly', () => {
    const { output } = setup(<Bar />)

    expect(output.type).toBe('div')
    expect(output.props.children).toBe('And I am Bar!')


  })

})