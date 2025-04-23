import { Outlet } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Main from '../components/Main/Main'
import { Loader } from '../components/Adition/Adition'
import { getToken } from '../services/auth'
import { fetchCards } from '../services/api'
import { GlobalStyles } from '../GlobalStyles.styled'
import Header from '../components/Header/Header'
import { CardsProvider } from '../context/CardsProvider'
import { EmptyCardsPage } from '../components/Adition/Adition'
import { Wrapper } from '../components/Main/Main.styled'

function MainPage() {
    const [loading, setLoading] = useState(true)
    const [cards, setCards] = useState([])
    const [error, setError] = useState('')

    const getCards = useCallback(async () => {
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
        <CardsProvider>
            <GlobalStyles />
            <Wrapper>
                <Header />
                {loading ? (
                    <Loader />
                ) : error ? (
                    <span>{error}</span>
                ) : cards.length === 0 ? (
                    <EmptyCardsPage />
                ) : (
                    <Main />
                )}
                <Outlet />
            </Wrapper>
        </CardsProvider>
    )
}

export default MainPage
