import { useEffect, useState } from 'react'
import {
    fetchCountries,
    // fetchCountriesFromApi,
} from '../../utils/fetchCountries'
import { highlightSearchPattern } from '../../utils/highlightSearchPattern'
import { useDebounce } from '../useDebounce'

type useAutoComplete = {
    searchText: string
}

export default function useAutoComplete({ searchText }: useAutoComplete) {
    const [suggestion, setSuggestions] = useState<string[]>([])
    const debouncedValue = useDebounce(searchText, 500)

    async function getCountries(searchStr: string) {
        if (searchStr.trim().length > 0) {
            const results = await fetchCountries(searchStr)
            const _suggestions = results.map((result) =>
                highlightSearchPattern(searchStr, result)
            )
            setSuggestions(_suggestions)
        } else {
            setSuggestions([])
        }
    }

    useEffect(() => {
        getCountries(debouncedValue)
    }, [debouncedValue, searchText])

    return {
        suggestion,
    }
}
