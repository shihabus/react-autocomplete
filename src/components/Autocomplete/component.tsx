import React from 'react'
import AutocompleteInput from './AutocompleteInput'
import styles from './autocomplete.module.css'
import data from '../../data/countryList.json'

type AutocompleteProps = {
    renderInput: (label: string) => React.JSX.Element
}

function Autocomplete({ renderInput }: AutocompleteProps) {
    console.log('data', data)
    return (
        <div className={styles.container}>
            <AutocompleteInput
                label="Search Countries"
                onChange={(e) => {
                    console.log('e', e)
                }}
            />

            <ul>{data.countries.slice(0, 10).map((x) => renderInput(x))}</ul>
        </div>
    )
}

export { Autocomplete }
