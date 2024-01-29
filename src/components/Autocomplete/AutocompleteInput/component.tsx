import React from 'react'
import styles from './autocomplete-input.module.css'

type AutocompleteInput = {
    label: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export default function AutocompleteInput({
    label,
    onChange,
}: AutocompleteInput) {
    return (
        <form action="">
            <label htmlFor="search-text" className={styles.label}>
                {label}
            </label>
            <br />
            <input
                type="search"
                id="search-text"
                autoComplete="off"
                className={styles.input}
                onChange={onChange}
            />
        </form>
    )
}
