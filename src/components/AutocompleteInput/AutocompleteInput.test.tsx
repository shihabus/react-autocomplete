import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { AutocompleteInput } from './component'
import { render } from '../../test/test-util'

const mockOnChangeHandler = jest.fn()

describe('AutocompleteInput', () => {
    it('should render the component', () => {
        render(<AutocompleteInput label="" />, {})
    })

    it('should show label', () => {
        render(<AutocompleteInput label="test label" />, {})
        const label = screen.getByText('test label')
        expect(label).toBeInTheDocument()
    })

    it('should trigger onChangeHandler', async () => {
        render(<AutocompleteInput label="test label" />, {
            store: { onChangeHandler: mockOnChangeHandler },
        })
        const searchInput = screen.getByPlaceholderText(/enter country name/i)
        await userEvent.type(searchInput, 'russia')
        expect(mockOnChangeHandler).toHaveBeenCalled()
    })

    it('should set value', async () => {
        render(<AutocompleteInput label="test label" />, {
            store: { searchStr: 'sample text' },
        })
        const searchInput =
            screen.getByPlaceholderText<HTMLInputElement>(/enter country name/i)
        expect(searchInput.value).toEqual('sample text')
    })
})
