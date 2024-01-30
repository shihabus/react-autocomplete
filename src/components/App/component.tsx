import React from 'react'

import './styles.css'
import Autocomplete from '../Autocomplete'
import AutocompleteSuggestions from '../AutocompleteSuggestions'

function App() {
    return (
        <div className="container">
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
