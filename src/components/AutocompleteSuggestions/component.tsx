import React from 'react'

import './AutocompleteSuggestions.module.css'
import { useCountrySearchContext } from '../../context/countrySearchContext'

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
                    onClick={handleSelection}
                    dangerouslySetInnerHTML={{ __html: suggestion.label }}
                    {...props}
                    data-value={suggestion.value}
                ></li>
            ))}
        </ul>
    )
}

export { AutocompleteSuggestions }
