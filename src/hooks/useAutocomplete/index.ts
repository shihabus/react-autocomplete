import { useEffect, useState } from 'react'
import { fetchCountries } from '../../utils/fetchCountries'
import { highlightSearchPattern } from '../../utils/highlightSearchPattern'

type useAutoComplete = {
    searchText: string
}

export default function useAutoComplete({ searchText }: useAutoComplete) {
    const [suggestion, setSuggestions] = useState<string[]>([])
    // const [searchText, setSearchText] = useState('')

    async function getCountries(searchText: string) {
        if (searchText.trim().length > 0) {
            const results = await fetchCountries(searchText)
            const _suggestions = results.map((result) =>
                highlightSearchPattern(searchText, result)
            )
            setSuggestions(_suggestions)
        } else {
            setSuggestions([])
        }
    }

    useEffect(() => {
        getCountries(searchText)
    }, [searchText])

    return {
        suggestion,
        // setSearchText,
    }
}
