import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import Calendar from '../Calendar/Calendar'
import { useContext } from 'react'
import { CardsContext } from '../../context/CardsContext'
import * as S from './PopBrows.styled'

export default function PopBrowse() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { cards, updateCard, removeCard } = useContext(CardsContext)
    const [isEditable, setIsEditable] = useState(false)
    const [errors, setErrors] = useState({})
    const [error, setError] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
    const [card, setCard] = useState(null)
    const [status, setStatus] = useState('')
    const [originalData, setOriginalData] = useState(null)
    useEffect(() => {
        const foundCard = cards.find((c) => c._id === id)
        if (foundCard) {
            setCard(foundCard)
            setStatus(foundCard.status)
            setSelectedDate(dayjs(foundCard.date).format('DD.MM.YYYY'))
            setOriginalData({
                // Сохраняем оригинальные данные
                description: foundCard.description,
                status: foundCard.status,
                date: foundCard.date,
            })
        }
    }, [id, cards])

    const validateForm = () => {
        const newErrors = {}

        if (!card?.description.trim()) {
            newErrors.description = 'Описание задачи обязательно'
        } else if (card.description.trim().length < 3) {
            newErrors.description =
                'Описание должно содержать минимум 3 символа'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSave = async () => {
        if (!validateForm()) {
            return
        }
        try {
            const updated = {
                ...card,
                description: card.description, // обнови что нужно
                status: status,
                date:
                    dayjs(selectedDate, 'DD.MM.YYYY').toISOString() ||
                    card.date,
            }
            await updateCard({ card: updated, id })

            setIsEditable(false) // После сохранения выключаем редактирование
        } catch (err) {
            setError(err.message)
        }
    }

    const handleDelete = async () => {
        await removeCard({ id })
        navigate('/')
    }

    const handleEdit = () => {
        setIsEditable(true) // Включаем редактирование
    }
    const handleCancel = () => {
        setCard({
            ...card,
            description: originalData.description,
            status: originalData.status,
            date: originalData.date,
        })
        setStatus(originalData.status)
        setSelectedDate(dayjs(originalData.date).format('DD.MM.YYYY'))
        setIsEditable(false)
    }

    return (
        <S.PopBrows>
            <S.PopBrowsContainer>
                <S.PopBrowsBlock>
                    <S.PopBrowsContent>
                        <S.PopBrowsTopBlock>
                            <S.PopBrowsTtl>{card?.title}</S.PopBrowsTtl>
                            <S.PopCategoryItem $category={card?.topic}
                            >
                                <p>{card?.topic}</p>
                            </S.PopCategoryItem>
                        </S.PopBrowsTopBlock>
                        <S.PopBrowsStatus>
                            <S.PopBrowsStatusP>Статус</S.PopBrowsStatusP>

                            <S.PopBrowsStatusThemes>
                                <S.PopStatusThemeBlock>
                                    {isEditable &&
                                        [
                                            'Без статуса',
                                            'Нужно сделать',
                                            'in-progress',
                                            'Тестирование',
                                            'Готово',
                                        ].map((item) => (
                                            <S.PopStatusTheme
                                            
                                                $active={item === status}
                                                key={item}
                                                onClick={() => {
                                                    setStatus(item)
                                                }}
                                            >
                                                <p >
                                                    {item === 'in-progress'
                                                        ? 'В работе'
                                                        : item}
                                                </p>
                                            </S.PopStatusTheme>
                                        ))}
                                </S.PopStatusThemeBlock>

                                {!isEditable && (
                                    <S.PopStatusTheme
                                        style={{ backgroundColor: '#94a6be' , cursor: isEditable? 'pointer' : 'default'}}
                                    >
                                        <p style={{ color: '#ffffff' }}>
                                            {card?.status === 'in-progress'
                                                ? 'В работе'
                                                : card?.status}
                                        </p>
                                    </S.PopStatusTheme>
                                )}
                            </S.PopBrowsStatusThemes>
                        </S.PopBrowsStatus>
                        <S.PopBrowsWrap>
                            <S.PopBrowsForm id="formBrowseCard" action="#">
                                <S.PopFormBrowsBlock>
                                    <S.FormSubTtl htmlFor="textArea01">
                                        Описание задачи
                                    </S.FormSubTtl>
                                    <S.FormBrowserArea
                                        $error={errors.description}
                                        name="text"
                                        id="textArea01"
                                        placeholder="Введите описание задачи..."
                                        value={card?.description || ''}
                                        onChange={(e) =>
                                            setCard({
                                                ...card,
                                                description: e.target.value,
                                            })
                                        }
                                        readOnly={!isEditable}
                                        style={{
                                            backgroundColor: isEditable
                                                ? '#f0f8ff'
                                                : '',
                                            transition:
                                                'background-color 0.3s ease',
                                        }}
                                    ></S.FormBrowserArea>

                                    {errors.description && (
                                        <S.FormErrorBlock>
                                            {errors.description}
                                        </S.FormErrorBlock>
                                    )}
                                    {error && (
                                        <S.FormErrorBlock>
                                            {error}
                                        </S.FormErrorBlock>
                                    )}
                                </S.PopFormBrowsBlock>
                            </S.PopBrowsForm>

                            <S.PopNewCardCalendar>
                                <S.FormSubTtl>
                                    <S.NewCardCalendarTtl>
                                        {' '}
                                        Даты
                                    </S.NewCardCalendarTtl>
                                </S.FormSubTtl>
                                <Calendar
                                    selectedDate={
                                        selectedDate ||
                                        dayjs(card?.date).format('DD.MM.YYYY')
                                    }
                                    onDateSelect={(date) =>
                                        isEditable && setSelectedDate(date)
                                    }
                                    isEditable={isEditable}
                                    currentDate={card?.date}
                                />
                            </S.PopNewCardCalendar>
                        </S.PopBrowsWrap>

                        {!isEditable && (
                            <S.PopNewCardBtnBrows>
                                <S.PopNewCardButtonGroup>
                                    <S.PopButtonLight
                                        type="button"
                                        onClick={handleEdit}
                                    >
                                        <p>Редактировать задачу</p>
                                    </S.PopButtonLight>

                                    <S.PopButtonLight
                                        style={{ width: '131px' }}
                                        type="button"
                                        onClick={handleDelete}
                                    >
                                        <p>Удалить задачу</p>
                                    </S.PopButtonLight>
                                </S.PopNewCardButtonGroup>

                                <S.PopCardButton onClick={() => navigate('/')}>
                                    Закрыть
                                </S.PopCardButton>
                            </S.PopNewCardBtnBrows>
                        )}
                        {isEditable && (
                            <S.PopNewCardBtnBrows>
                                <S.PopNewCardButtonGroup>
                                    <S.PopCardButton
                                        type="button"
                                        onClick={handleSave}
                                    >
                                        Сохранить
                                    </S.PopCardButton>

                                    <S.PopButtonLight
                                        style={{ width: '93px' }}
                                        type="button"
                                        onClick={handleCancel}
                                    >
                                        <p>Отменить</p>
                                    </S.PopButtonLight>

                                    <S.PopButtonLight
                                        style={{ width: '131px' }}
                                        id="btnDelete"
                                        type="button"
                                        onClick={handleDelete}
                                    >
                                        <p>Удалить задачу</p>
                                    </S.PopButtonLight>
                                </S.PopNewCardButtonGroup>
                                <S.PopCardButton onClick={() => navigate('/')}>
                                    Закрыть
                                </S.PopCardButton>
                            </S.PopNewCardBtnBrows>
                        )}
                    </S.PopBrowsContent>
                </S.PopBrowsBlock>
            </S.PopBrowsContainer>
        </S.PopBrows>
    )
}
