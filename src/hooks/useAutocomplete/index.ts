import { useState, useRef, useMemo, useCallback } from 'react'
import { highlightSearchPattern } from '../../utils/highlightSearchPattern'
import debounce from '../../utils/debounce'

type useAutoComplete = {
    fetchSuggestions: (searchKey: string) => Promise<string[]>
    options: {
        minSearchChars?: number
        suggestionsMaxLen?: number
        autoHighlight?: boolean
        debounceDelay?: number
    }
}

export default function useAutoComplete({
    fetchSuggestions,
    options,
}: useAutoComplete) {
    const [searchStr, setSearchStr] = useState('')
    const [suggestions, setSuggestions] = useState<
        { label: string; value: string }[]
    >([])
    const ref = useRef('')

    const getSuggestions = useCallback(async () => {
        const results = await fetchSuggestions(ref.current)
        const _suggestions = results
            .map((result) => ({
                label: options?.autoHighlight
                    ? highlightSearchPattern(ref.current, result)
                    : result,
                value: result,
            }))
            .slice(0, options?.suggestionsMaxLen ?? 10)
        setSuggestions(_suggestions)
    }, [fetchSuggestions, options?.autoHighlight, options?.suggestionsMaxLen])

    const debouncedSendRequest = useMemo(() => {
        return debounce(getSuggestions, options?.debounceDelay ?? 1000)
    }, [getSuggestions, options?.debounceDelay])

    const onChangeHandler = (str: string) => {
        const inputStr = str.trimStart()
        setSearchStr(inputStr)
        // to circumvent stale state value
        ref.current = inputStr
        if (ref.current?.length >= (options?.minSearchChars ?? 1)) {
            debouncedSendRequest()
        } else {
            setSuggestions([])
        }
    }

    const makeSelection = (selection: string) => {
        setSearchStr(selection)
        setSuggestions([])
    }

    return {
        onChangeHandler,
        searchStr,
        suggestions,
        makeSelection,
    }
}
