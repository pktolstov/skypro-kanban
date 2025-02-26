import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import PopNewCard from './components/newcard/PopNewCard'
import PopBrowse from './components/browse/PopBrowse'
import Main from './components/main_container/Main'
import PopUser from './components/profile/PopUser'

function App() {
    return (
        <div className="wrapper">
            <PopUser />

            <PopNewCard />

            <PopBrowse />

            <Header />
            <Main />
        </div>
    )
}

export default App
