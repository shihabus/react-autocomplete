import React from 'react'

import './styles.css'
import Autocomplete from '../Autocomplete'
import AutocompleteSuggestions from '../AutocompleteSuggestions'

function App() {
    return (
        <div className="container">
            <Autocomplete
                renderInput={(suggestion) => (
                    <AutocompleteSuggestions label={suggestion} />
                )}
            />
        </div>
    )
}

export { App }
