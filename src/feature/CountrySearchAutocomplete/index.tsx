import React from 'react'

import Autocomplete from '../../components/Autocomplete'
import CountrySearchContextProvider from '../../context/CountrySearch'

function CountrySearchAutocomplete() {
    return (
        <CountrySearchContextProvider>
            <Autocomplete />
        </CountrySearchContextProvider>
    )
}

export default CountrySearchAutocomplete
