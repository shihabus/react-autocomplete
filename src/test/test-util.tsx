import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { CountrySearchContext } from '../context/CountrySearch'

type contextType = {
    onChangeHandler?: (txt: string) => void
    searchStr?: string
    suggestions?: { label: string; value: string }[]
    makeSelection?: (txt: string) => void
    error?: string
}

type customRenderType = {
    contextProps?: contextType
    options?: Omit<RenderOptions, 'wrapper'>
}

const customRender = (
    ui: ReactElement,
    { contextProps, ...options }: customRenderType
) => {
    const defaultContext = {
        onChangeHandler: () => null,
        searchStr: '',
        suggestions: [],
        makeSelection: () => null,
        error: '',
    }
    const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
        return (
            <CountrySearchContext.Provider
                value={{ ...defaultContext, ...contextProps }}
            >
                {children}
            </CountrySearchContext.Provider>
        )
    }
    return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
