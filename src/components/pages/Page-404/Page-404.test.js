import React from 'react'
import { mount } from 'enzyme'

import Page404 from './Page-404'

describe('Product', () => {
  let wrapper

  const getByDataId = dataId => wrapper.find(`[data-id="${dataId}"]`)
  const getPage = () => getByDataId('page404')

  it('should render', () => {
    wrapper = mount(<Page404 />)
    expect(getPage().length).toBe(1)
  })
})
