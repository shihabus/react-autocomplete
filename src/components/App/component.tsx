import React from 'react'

// TODO:
// - path aliasing. With CRA we don't have enough control over the webpack config.
import Autocomplete from '../Autocomplete'

import styles from './App.module.css'
import CountrySearchContextProvider from '../../context/CountrySearch'

function App() {
    return (
        <div className={styles.container}>
            <CountrySearchContextProvider>
                <Autocomplete />
            </CountrySearchContextProvider>
        </div>
    )
}

export { App }
