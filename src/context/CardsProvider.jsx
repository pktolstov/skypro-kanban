import { useContext, useState, useEffect } from 'react'
import { fetchCards, postCard, editCard,deleteCard } from '../services/api'
import { AuthContext } from './AuthContext'
import { CardsContext } from './CardsContext'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

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
      const isoDate = dayjs(card?.date, 'DD.MM.YYYY').toISOString()
     
        try {
            const newCards = await postCard({
                token: user?.token,
                card: {
                    ...card,
                    date: isoDate
                },
            }
            
         )
         setCards(newCards)

        } catch (error) {
            console.error('Ошибка добавления задачи', error)
            setError(error)
        }
    }

    const updateCard = async ({ card, id }) => {
        try {
            const newCards = await editCard({ token: user?.token, id, card })
            setCards(newCards)
        } catch (error) {
            console.error('Ошибка редактирования задачи', error)
            setError(error)
        }
    }

    const removeCard = async ({  id }) => {
      try {
          const newCards = await deleteCard({ token: user?.token, id })
          setCards(newCards)
      } catch (error) {
          console.error('Ошибка удаления задачи', error)
          setError(error)
      }
  }

    return (
        <CardsContext.Provider
            value={{ cards, addNewCard, updateCard, removeCard, loading, error }}
        >
            {children}
        </CardsContext.Provider>
    )
}
