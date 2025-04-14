import { ThemeContext } from './ThemeContext'
import { useContext, useState } from "react"


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light') // По умолчанию светлая тема

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
        // Можно добавить сохранение в localStorage
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };