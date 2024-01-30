// All API routes go here

const routes = {
    restCountries(searchStr: string) {
        return `https://restcountries.com/v3.1/name/${searchStr}`
    },
}

export { routes }
