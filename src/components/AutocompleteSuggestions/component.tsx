import React from 'react'

import './AutocompleteSuggestions.module.css'

type AutocompleteSuggestions = {
    suggestion: { label: string; value: string }
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

// TODO:
// sanitize the html before injecting it into DOM
// using dangerouslySetInnerHTML
// can use DOMPurify
function AutocompleteSuggestions({
    suggestion,
    ...inputProps
}: AutocompleteSuggestions) {
    return (
        <li
            {...inputProps}
            dangerouslySetInnerHTML={{ __html: suggestion.label }}
            data-value={suggestion.value}
        ></li>
    )
}

export { AutocompleteSuggestions }
