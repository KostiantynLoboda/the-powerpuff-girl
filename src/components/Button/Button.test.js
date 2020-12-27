import React from 'react'
import { mount } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  let wrapper

  const getByDataId = dataId => wrapper.find(`[data-id="${dataId}"]`)
  const getButton = () => getByDataId('button')

  it('should render', () => {
    wrapper = mount(<Button/>)
    expect(getButton().length).toBe(1)
  })
})
