import data from '../../data/countryList.json'
import { routes } from '../../constants/apiRoutes'

export function fetchCountries(matchString: string): Promise<string[]> {
    return new Promise((resolve) => {
        const countryList: string[] = data.countries
        let suggestions: string[] = []
        if (matchString.length) {
            suggestions = countryList.filter((listItem) =>
                new RegExp(matchString, 'gi').test(listItem)
            )
        }
        setTimeout(() => resolve(suggestions), 300)
    })
}

// GOTCHA
// API return countries official and common name.
// At time we might see suggestion not relevant to search
// coz of this

// TODO:
// show relevant error in UI
export async function fetchCountriesFromApi(searchStr: string) {
    try {
        const response = await fetch(routes.restCountries(searchStr))

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
        }

        const countries: {
            name: {
                official: string
            }
        }[] = await response.json()

        return countries?.map((country) => country.name.official)
    } catch (error) {
        return []
    }
}
