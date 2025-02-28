import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Main from './components/Main/Main'
import PopUser from './components/PopUser/PopUser'

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
