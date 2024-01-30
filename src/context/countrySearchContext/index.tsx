import React, { createContext, useContext } from 'react'
import useAutoComplete from '../../hooks/useAutocomplete'
import { fetchCountries } from '../../utils/fetchCountries'

type CountrySearchContextType = null | {
    searchStr: string
    onChangeHandler: (searchInput: string) => void
    suggestions: { label: string; value: string }[]
    makeSelection: (selectedStr: string) => void
    error: string
}

const CountrySearchContext = createContext<CountrySearchContextType>(null)
CountrySearchContext.displayName = 'CountrySearchContext'

function CountrySearchContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const { onChangeHandler, searchStr, suggestions, makeSelection, error } =
        useAutoComplete({
            options: {
                minSearchChars: 3,
                suggestionsMaxLen: 10,
                autoHighlight: true,
                debounceDelay: 300,
            },
            fetchSuggestions: fetchCountries,
        })
    return (
        <CountrySearchContext.Provider
            value={{
                onChangeHandler,
                searchStr,
                suggestions,
                makeSelection,
                error,
            }}
        >
            {children}
        </CountrySearchContext.Provider>
    )
}

function useCountrySearchContext() {
    const context = useContext(CountrySearchContext)

    if (!context) {
        throw new Error(
            'useCountrySearchContext can only be used within <CountrySearchContextProvider>'
        )
    }

    return context
}

export default CountrySearchContextProvider

export { useCountrySearchContext, CountrySearchContext }
