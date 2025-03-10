import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Main from './components/Main/Main'
import { LoadExpext } from './components/Adition/Adition'
import PopUser from './components/PopUser/PopUser'

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        ;<LoadExpext />
        setTimeout(() => {
            setLoading(false)
        }, 9000)
    }, [loading])

    return (
        <div className="wrapper">
            <PopUser />

            <PopNewCard />

            <PopBrowse />

            <Header />
            <Main loading={loading} />
        </div>
    )
}

export default App
