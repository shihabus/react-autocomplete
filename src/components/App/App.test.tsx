import React from 'react'

import { App } from './component'
import { render } from '../../test/test-util'

describe('App', () => {
    it('should render the component', () => {
        render(<App />, {})
    })
})
