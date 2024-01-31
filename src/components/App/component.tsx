import React from 'react'

// TODO:
// - path aliasing. With CRA we don't have enough control over the webpack config.
import styles from './App.module.css'

import CountrySearchAutocomplete from '../../feature/CountrySearchAutocomplete'

function App() {
    return (
        <div className={styles.container}>
            <CountrySearchAutocomplete />
        </div>
    )
}

export { App }
