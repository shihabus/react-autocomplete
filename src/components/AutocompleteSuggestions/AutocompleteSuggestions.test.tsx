import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { AutocompleteSuggestions } from './component'
import { render } from '../../test/test-util'

const mockMakeSelection = jest.fn()
const suggestions = ['apple', 'carrot', 'beans'].map((val) => ({
    value: val,
    label: val,
}))

describe('AutocompleteSuggestions', () => {
    it('should render the component', () => {
        render(<AutocompleteSuggestions />, {})
    })

    it('should render suggestions', () => {
        render(<AutocompleteSuggestions />, {
            contextProps: {
                suggestions,
                makeSelection: mockMakeSelection,
            },
        })
        const list = screen.getAllByLabelText('suggestion')
        expect(list.length).toBe(3)
    })

    it('should trigger onclick handler', async () => {
        render(<AutocompleteSuggestions />, {
            contextProps: {
                suggestions,
                makeSelection: mockMakeSelection,
            },
        })
        const carrotLi = screen.getByText('carrot')

        await userEvent.click(carrotLi)
        expect(mockMakeSelection).toHaveBeenCalled()
    })

    it('should trigger makeSelection with selection onclick', async () => {
        render(<AutocompleteSuggestions />, {
            contextProps: {
                suggestions,
                makeSelection: mockMakeSelection,
            },
        })
        const appleLi = screen.getByText('apple')

        await userEvent.click(appleLi)
        expect(mockMakeSelection).toHaveBeenCalledWith('apple')
    })
})
