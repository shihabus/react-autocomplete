export function highlightSearchPattern(
    searchValue: string,
    stringInput: string
) {
    const regex = new RegExp(searchValue, 'i')
    return stringInput.replace(regex, (str) => `<b>${str}</b>`)
}
