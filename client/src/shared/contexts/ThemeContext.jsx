import React, { createContext, useState } from 'react';

export const themes = { 
    
    light: {
        backgroundColor: '#FFFFFF',
        color: '#2F3C7E'
    },
    dark: {
        backgroundColor: '#2F3C7E',
        color: '#FBEAEB'
    }
}

export const ThemeContext = createContext(themes.light);

const ThemeContextProvider = (props) => {

    const [ currentTheme, setCurrentTheme ] = useState(themes.light);

    const toggleTheme = () => {
        currentTheme === themes.light ? 
        setCurrentTheme(themes.dark):
        setCurrentTheme(themes.light)
    }

    return (
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider