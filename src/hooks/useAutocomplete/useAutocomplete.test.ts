import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useAutoComplete from '.'

beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date(2020, 1, 10))
})

afterEach(() => {
    jest.useRealTimers()
})

afterAll(() => {
    jest.clearAllMocks()
})

describe('useAutoComplete', () => {
    test('useAutoComplete should call fetchSuggestions', () => {
        const mockAsyncFetcher = jest
            .fn()
            .mockResolvedValue(['apple', 'carrot', 'lemon'])

        const { result } = renderHook(() =>
            useAutoComplete({
                fetchSuggestions: mockAsyncFetcher,
            })
        )
        expect(result.current.suggestions).toEqual([])

        act(() => result.current.onChangeHandler('car'))

        expect(result.current.suggestions).toEqual([])

        jest.advanceTimersByTime(2000)

        expect(mockAsyncFetcher).toHaveBeenCalledWith('car')
    })
})
