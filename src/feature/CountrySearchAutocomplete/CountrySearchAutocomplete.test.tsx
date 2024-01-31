import React from 'react'

import { render } from '../../test/test-util'
import CountrySearchAutocomplete from '.'

describe('CountrySearchAutocomplete', () => {
    it('should render the component', () => {
        render(<CountrySearchAutocomplete />, {})
    })
})
