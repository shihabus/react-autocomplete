import React from 'react'

import { screen } from '@testing-library/react'
import { AutocompleteError } from './component'
import { render } from '../../test/test-util'

describe('AutocompleteError', () => {
    it('should render the component', () => {
        render(<AutocompleteError />, {})
    })

    it('should display error text', () => {
        render(<AutocompleteError />, {
            store: { error: 'something went wrong' },
        })

        const error = screen.getByLabelText('error-text')
        expect(error.textContent).toEqual('something went wrong')
    })
})
