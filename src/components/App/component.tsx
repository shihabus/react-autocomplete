import React from 'react'

import Autocomplete from '../Autocomplete'
import AutocompleteSuggestions from '../AutocompleteSuggestions'

import styles from './App.module.css'

function App() {
    return (
        <div className={styles.container}>
            <Autocomplete>
                {(suggestion, props) => (
                    <AutocompleteSuggestions
                        key={suggestion.value}
                        {...props}
                        suggestion={suggestion}
                    />
                )}
            </Autocomplete>
        </div>
    )
}

export { App }
