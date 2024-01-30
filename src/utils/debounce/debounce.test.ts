import { debounce } from '.'

beforeEach(() => {
    jest.useFakeTimers()
})

afterAll(() => {
    jest.useRealTimers()
})

describe('debounce', () => {
    it('should only call the function after the delay', () => {
        const mockFn = jest.fn()
        const delay = 100
        const debouncedFunc = debounce(mockFn, delay)

        debouncedFunc()
        expect(mockFn).not.toHaveBeenCalled()

        jest.advanceTimersByTime(delay + 10)

        expect(mockFn).toHaveBeenCalled()
    })

    it('should call with passed parameters', () => {
        const mockFn = jest.fn()
        const delay = 100
        const debouncedFunc = debounce(mockFn, delay)

        debouncedFunc('_test_param')
        expect(mockFn).not.toHaveBeenCalled()

        jest.advanceTimersByTime(delay + 10)

        expect(mockFn).toHaveBeenCalledWith('_test_param')
    })
})
