
import { useState } from 'react'
import './App.css'
import AppRoutes from './AppRoutes'
import { GlobalStyles } from './GlobalStyles.styled'
import AuthProvider from './context/AuthProvider'
import { ThemeProvider } from './context/ThemProvider'
import { lightTheme, darkTheme } from './themes'

function App() {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <AuthProvider>
                <GlobalStyles />
                <AppRoutes />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
