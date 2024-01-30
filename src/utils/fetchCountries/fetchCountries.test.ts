import { fetchCountries, fetchCountriesFromApi } from '.'

jest.mock('../../data/countryList.json', () => ({
    countries: ['india', 'china', 'russia', 'usa'],
}))

afterAll(() => {
    jest.clearAllMocks()
})

describe('fetchCountries', () => {
    it('should return matched values', async () => {
        const result = await fetchCountries('iA')
        expect(result).toEqual(['india', 'russia'])
    })

    it('should return [] when there is no matched values', async () => {
        const result = await fetchCountries('brazil')
        expect(result).toEqual([])
    })
})

describe('fetchCountriesFromApi', () => {
    it('should call restcountries API with search string', async () => {
        jest.spyOn(window, 'fetch').mockResolvedValue(new Response())
        await fetchCountriesFromApi('iA')

        expect(window.fetch).toHaveBeenCalledWith(
            expect.stringContaining('restcountries.com/v3.1/name/iA')
        )
    })

    it('should call restcountries API with search string', async () => {
        jest.spyOn(window, 'fetch').mockResolvedValue(
            new Response(null, { status: 404 })
        )
        const result = await fetchCountriesFromApi('iA')
        expect(result).toEqual([])
    })
})
