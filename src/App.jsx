import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Newcard from './components/newcard/Newcard'
import BrowseCards from './components/browse/BrowseCards'
import MainContainer from './components/main_container/MainConteiner'
import Profile from './components/profile/Profile'

function App() {
    return (
        <div className="wrapper">
            <Profile />

            <Newcard />

            <BrowseCards />

            <Header />
            <MainContainer />
        </div>
    )
}

export default App
