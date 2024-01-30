import React from 'react'

import styles from './AutocompleteInput.module.css'

type AutocompleteInput = {
    label: string
    inputValue: string
    handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void
}

// TODO
// can have props getters for styles and attributes
function AutocompleteInput({
    label,
    handleInputChange,
    inputValue,
    ...props
}: AutocompleteInput) {
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
                onChange={handleInputChange}
                value={inputValue}
                {...props}
            />
        </form>
    )
}

export { AutocompleteInput }
