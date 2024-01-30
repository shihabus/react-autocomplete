import { highlightSearchPattern } from '.'

describe('highlightSearchPattern', () => {
    it('should highlight matching string', () => {
        const result = highlightSearchPattern('js', 'JS and python')
        expect(result).toEqual(expect.stringContaining('<b>JS</b> and python'))
    })

    it("shouldn't highlight the string upon un-match", () => {
        const result = highlightSearchPattern('javascript', 'JS and python')
        expect(result).toEqual(expect.stringContaining('JS and python'))
    })
})
