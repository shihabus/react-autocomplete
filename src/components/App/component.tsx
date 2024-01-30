import React from 'react'

// TODO:
// - path aliasing. With CRA we don't have enough control over the webpack config.
import Autocomplete from '../Autocomplete'
import AutocompleteSuggestions from '../AutocompleteSuggestions'

import styles from './App.module.css'

// TODO:
// - add getterProps
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
