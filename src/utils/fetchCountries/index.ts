import data from '../../data/countryList.json'

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

export async function fetchCountriesFromApi(searchStr: string) {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${searchStr}`
        )

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
        console.error(error)
        return []
    }
}
