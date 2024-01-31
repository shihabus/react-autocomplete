import React from 'react'

import styles from './AutocompleteSuggestions.module.css'

import { useCountrySearchContext } from '../../context/CountrySearch'

// TODO:
// sanitize the html before injecting it into DOM
// using dangerouslySetInnerHTML
// can use DOMPurify
function AutocompleteSuggestions({ ...props }) {
    const { suggestions, makeSelection } = useCountrySearchContext()
    function handleSelection(event: React.MouseEvent<HTMLElement>) {
        const selectedValue: string = event.currentTarget.dataset.value || ''
        makeSelection(selectedValue)
    }
    return (
        <ul>
            {suggestions.map((suggestion) => (
                <li
                    key={suggestion.value}
                    className={styles.suggestion}
                    onClick={handleSelection}
                    aria-label="suggestion"
                    {...props}
                    data-value={suggestion.value}
                    dangerouslySetInnerHTML={{ __html: suggestion.label }}
                ></li>
            ))}
        </ul>
    )
}

export { AutocompleteSuggestions }
