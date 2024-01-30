import React from 'react'

import styles from './Autocomplete.module.css'

import AutocompleteInput from '../AutocompleteInput'
import AutocompleteSuggestions from '../AutocompleteSuggestions'
import AutocompleteError from '../AutocompleteError'

function Autocomplete() {
    return (
        <div className={styles.container}>
            <AutocompleteInput label="Search Countries" />
            <AutocompleteSuggestions />
            <AutocompleteError />
        </div>
    )
}

export { Autocomplete }
