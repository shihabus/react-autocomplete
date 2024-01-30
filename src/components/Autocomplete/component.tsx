import React from 'react'
import AutocompleteInput from '../AutocompleteInput'
import styles from './autocomplete.module.css'
import useAutoComplete from '../../hooks/useAutocomplete'
import {
    // fetchCountries,
    fetchCountriesFromApi,
} from '../../utils/fetchCountries'

type AutocompleteProps = {
    children: (
        suggestion: { label: string; value: string },
        props: object
    ) => React.JSX.Element
}

function Autocomplete({ children }: AutocompleteProps) {
    const { onChangeHandler, searchStr, suggestions, makeSelection } =
        useAutoComplete({
            fetchSuggestions: fetchCountriesFromApi,
            options: {
                minSearchChars: 3,
                suggestionsMaxLen: 10,
                autoHighlight: true,
                debounceDelay: 300,
            },
        })

    const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
        onChangeHandler(e.currentTarget.value)
    }

    const suggestionProps: {
        onClick: (event: React.MouseEvent<HTMLElement>) => void
    } = {
        onClick: (e) => {
            const selectedValue: string = e.currentTarget.dataset.value || ''
            makeSelection(selectedValue)
        },
    }

    return (
        <div className={styles.container}>
            <AutocompleteInput
                label="Search Countries"
                handleInputChange={handleChange}
                inputValue={searchStr}
            />

            <ul>
                {suggestions?.map((suggestion) =>
                    children(suggestion, suggestionProps)
                )}
            </ul>
        </div>
    )
}

export { Autocomplete }
