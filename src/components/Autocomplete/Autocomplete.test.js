import React from 'react'

import { Autocomplete } from './component'
import { render } from '../../test/test-util'

describe('Autocomplete', () => {
    it('should render the component', () => {
        render(<Autocomplete />, {})
    })
})
