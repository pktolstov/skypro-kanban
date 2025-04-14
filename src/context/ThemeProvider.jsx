import { ThemeContext } from './ThemeContext'
import { useContext, useState } from 'react'
import { lightTheme, darkTheme } from '../themes'

export const ThemeProvider = ({ children, theme: initialTheme }) => {
    const [theme, setTheme] = useState(initialTheme)

    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
