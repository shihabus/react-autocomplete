import React from 'react'
import './styles.css'

type AutocompleteSuggestions = {
    label: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export default function AutocompleteSuggestions({
    label,
    ...inputProps
}: AutocompleteSuggestions) {
    return <li {...inputProps} dangerouslySetInnerHTML={{ __html: label }}></li>
}
