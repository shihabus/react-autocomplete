import { useEffect, useState } from 'react'
import { fetchCountries } from '../../utils/fetchCountries'

export default function useAutoComplete() {
    const [suggestion, setSuggestions] = useState<string[]>([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText.trim().length > 0) {
            fetchCountries(searchText).then((result) => setSuggestions(result))
        } else {
            setSuggestions([])
        }
    }, [searchText])

    return {
        suggestion,
        setSearchText,
    }
}
