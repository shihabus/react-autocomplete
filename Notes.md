# Todos

1. Sanitize html code before passing to dangerouslySetInnerHTML
2. Path aliasing
3. Make useAutocomplete hook more extensible with props and methods
4. API error handling
5. Style config
6. Close suggestions list if input loose focus
7. Add accessibility tests using `axe` 

# Assumptions

1. Limited the autocomplete suggestions to 10 (configurable).
2. Minimum 3 characters are required to trigger suggestion (configurable)
3. Loading state of the autocomplete is ignored
4. Used `https://restcountries.com/v3.1/name` to fetch country data
5. Created autosuggest/autocomplete for country names
6. We are doing a partial search for suggestions