import data from '../../data/countryList.json'

export async function fetchCountries(matchString: string): Promise<string[]> {
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
