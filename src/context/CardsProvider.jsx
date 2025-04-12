import { useContext, useState, useEffect } from 'react'
import { fetchCards, postCard, editCard } from '../services/api'
import { AuthContext } from './AuthContext'
import { CardsContext } from './CardsContext'
import { getToken } from '../services/auth'

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const loadCards = async () => {
            try {
                const data = await fetchCards({ token: user.token })
                setCards(data)
            } catch (error) {
                console.error('Ошибка загрузки задач', error)
            }
        }
        loadCards()
    }, [])

    const addNewCard = async ({ card }) => {
        try {
            const newCards = await postCard({ token: user?.token, card })
            setCards(newCards)
        } catch (error) {
            console.error('Ошибка добавления задачи', error)
        }
    }

    const updateCard = async ({ card, id }) => {
        try {
            const newCards = await editCard({ token: user?.token, id, card })
          
            setCards(newCards)
        } catch (error) {
            console.error('Ошибка редактирования задачи', error)
        }
    }

    return (
        <CardsContext.Provider
            value={{ cards, addNewCard, updateCard, loading, error }}
        >
            {children}
        </CardsContext.Provider>
    )
}
