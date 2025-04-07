import { useState, useEffect, useCallback } from 'react'
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
// import { GlobalStyles } from './GlobalStyles.styled' 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k'
import { Route, Routes, data } from 'react-router-dom'
import { fetchCards } from './components/services/api'
import AuthForm from './components/SignIn/AuthForm'
import { cleanUserData, getToken } from './components/services/auth'

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<MainPage />}>
                    <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
                    <Route path="/card/:id" element={<CardPage />} />
                </Route>
            </Route>
            <Route
                path="/signIn"
                element={<SignInPage setIsAuth={setIsAuth} />}
                // element={<AuthForm setIsAuth={setIsAuth}  isSignUp={false}/>}
            />
            <Route path="/signUp" element={<SignUpPage />} />
            {/* <Route path="/signUp" element={<AuthForm setIsAuth={setIsAuth} isSignUp={true}  />} /> */}

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes

// /, /exit, /card/:id, /login, /register, *.
