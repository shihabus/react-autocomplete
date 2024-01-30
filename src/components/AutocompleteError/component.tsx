import React from 'react'

import styles from './AutocompleteError.module.css'
import { useCountrySearchContext } from '../../context/countrySearchContext'

function AutocompleteError({ ...props }) {
    const { error } = useCountrySearchContext()
    if (error) {
        return (
            <p className={styles.error} {...props}>
                {error}
            </p>
        )
    }
    return null
}

export { AutocompleteError }
