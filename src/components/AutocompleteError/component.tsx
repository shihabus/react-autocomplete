import React from 'react'

import styles from './AutocompleteError.module.css'

import { useCountrySearchContext } from '../../context/CountrySearch'

function AutocompleteError({ ...props }) {
    const { error } = useCountrySearchContext()

    if (!error) {
        return null
    }

    return (
        <p aria-label="error-text" className={styles.error} {...props}>
            {error}
        </p>
    )
}

export { AutocompleteError }
