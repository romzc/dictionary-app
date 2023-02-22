import React from 'react'

const DictionaryContext = React.createContext({font: 'serif', theme: 'dark'})


const DictionaryProvider = ( props ) => {

    const [state, setState] = React.useState({font: 'serif', theme: 'dark'})

    const changeBackground = (event) => {
        const {value, name} = event.target
        setState(prev => ({
            ...prev,
            theme: (prev.theme === "dark") ? "light" : "dark"
        }))
    }

    const changeFont = (event) => {
        const {value, name} = event.target;
        setState( prev => ({
            ...prev,
            font: value
        }))
    }

    return (
        <DictionaryContext.Provider 
            value={{
                state,
                changeBackground,
                changeFont
            }}
        >
            {props.children}
        </DictionaryContext.Provider>
    )
}


export { DictionaryProvider, DictionaryContext }
