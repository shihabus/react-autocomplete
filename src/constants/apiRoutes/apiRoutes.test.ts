import { routes } from '.'

describe('API routes', () => {
    test('restCountries', () => {
        expect(routes.restCountries('')).toEqual(
            expect.stringContaining('https://restcountries.com/v3.1/name')
        )
    })
})
