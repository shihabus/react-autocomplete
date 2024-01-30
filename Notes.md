# Todos

1. Sanitize html code before passing to dangerouslySetInnerHTML
2. Path aliasing
3. Make useAutocomplete hook more extensible with props and methods
4. API error handling
5. Style config

# Assumptions

1. Limited the autocomplete suggestions to 10 (configurable).
2. Minimum 3 characters is required to trigger suggestion (configurable)
3. Loading state of the autocomplete is ignored
4. Total search set is small
5. Used `https://restcountries.com/v3.1/name` to fetch country data
6. Created a country name auto suggest