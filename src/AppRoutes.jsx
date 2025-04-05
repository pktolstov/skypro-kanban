import { useState, useEffect } from 'react'
// import PopNewCard from './components/PopNewCard/PopNewCard'
// import PopBrowse from './components/PopBrowse/PopBrowse'
import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import ExitPage from './pages/ExitPage'
import CardPage from './pages/CardPage'
// import { LoadExpect } from './components/Adition/Adition'
// import PopUser from './components/PopUser/PopUser'
// import { GlobalStyles } from './GlobalStyles.styled'
import { Route, Routes } from 'react-router-dom'

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [loading])

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<MainPage loading={loading} />}>
                    <Route path="/exit" element={<ExitPage />} />
                    <Route path="/card/:id" element={<CardPage />} />
                </Route>
            </Route>
            <Route
                path="/signIn"
                element={<SignInPage setIsAuth={setIsAuth} />}
            />
            <Route path="/signUp" element={<SignUpPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes

// /, /exit, /card/:id, /login, /register, *.
