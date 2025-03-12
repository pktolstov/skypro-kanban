import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Main from './components/Main/Main'
import { LoadExpect } from './components/Adition/Adition'
import PopUser from './components/PopUser/PopUser'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // <LoadExpect />
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [loading])

    return (
        <div className="wrapper">
            <PopUser />

            <PopNewCard />

            <PopBrowse />

            <Header />
            {loading ? <LoadExpect /> : <Main />}
        </div>
    )
}

export default App
