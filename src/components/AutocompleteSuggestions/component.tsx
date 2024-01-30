import React from 'react'

import './AutocompleteSuggestions.module.css'

type AutocompleteSuggestions = {
    suggestion: { label: string; value: string }
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

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
