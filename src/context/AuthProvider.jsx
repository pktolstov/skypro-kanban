import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { getToken } from '../services/auth'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getToken())
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('userInfo')
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            }
        } catch (error) {
            console.error('Ошибка при загрузке данных из localStorage:', error)
        }
    }, [])

    const updateUserInfo = (userData) => {
        setUser(userData)
        if (userData) {
            localStorage.setItem('userInfo', JSON.stringify(userData))
        } else {
            localStorage.removeItem('userInfo')
        }
    }

    return (
        <AuthContext.Provider value={{ user, updateUserInfo }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
