import { Outlet } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Main from '../components/Main/Main'
import { LoadExpect } from '../components/Adition/Adition'
import { getToken } from '../components/services/auth'
import { fetchCards } from '../components/services/api'
import { GlobalStyles } from '../GlobalStyles.styled'
import Header from '../components/Header/Header'

function MainPage() {
    const [loading, setLoading] = useState(true)
    const [cards, setCards] = useState([])
    const [error, setError] = useState('')

    const getCards = useCallback(async () => {
        // console.log(getToken().token);
        try {
            setLoading(true)
            const data = await fetchCards({
                token: getToken().token,
            })
            if (data) setCards(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [])
    useEffect(() => {
        getCards()
    }, [getCards])
    return (
        <>
            <GlobalStyles />
            <div className="wrapper">
                <Header />
                {loading ? <LoadExpect /> : <Main cardList={cards} />}
                <Outlet />
            </div>
        </>
    )
}

export default MainPage
