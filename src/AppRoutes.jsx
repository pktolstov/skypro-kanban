import { useState } from 'react'

import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import ExitPage from './pages/ExitPage'
import CardPage from './pages/CardPage'

import { Route, Routes } from 'react-router-dom'

import { getToken } from './services/auth'
import NewCardPage from './pages/newCardPage'

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(!!getToken())

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<MainPage />}>
                    <Route
                        path="/exit"
                        element={<ExitPage setIsAuth={setIsAuth} />}
                    />
                    <Route path="/card/:id" element={<CardPage />} />
                    <Route path="/newcard" element={<NewCardPage />} />
                </Route>
            </Route>
            <Route
                path="/signIn"
                element={<SignInPage setIsAuth={setIsAuth} />}
            />
            <Route
                path="/signUp"
                element={<SignUpPage setIsAuth={setIsAuth} />}
            />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes
