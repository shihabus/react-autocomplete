import React from 'react'

import styles from './AutocompleteInput.module.css'

type AutocompleteInput = {
    label: string
    inputValue: string
    handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void
}

function AutocompleteInput({
    label,
    handleInputChange,
    inputValue,
}: AutocompleteInput) {
    return (
        <form action="javascript:void(0);">
            <label htmlFor="search-text" className={styles.label}>
                {label}
            </label>
            <br />
            <input
                type="search"
                id="search-text"
                autoComplete="off"
                className={styles.input}
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    )
}

export { AutocompleteInput }
