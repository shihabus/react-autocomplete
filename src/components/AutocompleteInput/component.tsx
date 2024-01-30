import React from 'react'

import styles from './AutocompleteInput.module.css'
import { useCountrySearchContext } from '../../context/countrySearchContext'

type AutocompleteInput = {
    label: string
}

// TODO
// can have props getters for styles and attributes
function AutocompleteInput({ label, ...props }: AutocompleteInput) {
    const { onChangeHandler, searchStr } = useCountrySearchContext()

    const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
        onChangeHandler(e.currentTarget.value)
    }
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="search-text" className={styles.label}>
                {label}
            </label>
            <br />
            <input
                type="search"
                id="search-text"
                autoComplete="off"
                className={styles.input}
                onChange={handleChange}
                value={searchStr}
                placeholder="Enter country name"
                {...props}
            />
        </form>
    )
}

export { AutocompleteInput }
