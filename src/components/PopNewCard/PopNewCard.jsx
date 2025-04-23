import { useState } from 'react'
import Calendar from '../Calendar/Calendar'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CardsContext } from '../../context/CardsContext'
import dayjs from 'dayjs'
import * as S from './PopNewCard.styled'

export default function PopNewCard() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [error, setError] = useState('')
    const { addNewCard } = useContext(CardsContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [topic, setCategory] = useState('Web Design')
    const [date, setDate] = useState(null)

    const validateForm = () => {
        const newErrors = {}

   
        if (!title.trim()) {
            newErrors.title = 'Название задачи обязательно'
        } else if (title.trim().length < 3) {
            newErrors.title = 'Название должно содержать минимум 3 символа'
        }

        if (!description.trim() && description.trim().length < 3) {
            newErrors.description =
                'Описание должно содержать минимум 3 символов'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleCreate = async (e) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }

        try {
            const card = {
                title: title.trim(),
                description: description.trim(),
                topic,
                date: date || dayjs().format('DD.MM.YYYY'),
            }

            await addNewCard({ card: card })

            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }
    const handleCategoryClick = (newCategory) => {
        setCategory(newCategory)
    }

    return (
        <S.PopNewCard id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <S.PopNewCardLink to="/">&#10006;</S.PopNewCardLink>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm
                                id="formNewCard"
                                onSubmit={handleCreate}
                            >
                                <S.FormNewBlock>
                                    <S.FormSubTtl htmlFor="formTitle">
                                        Название задачи
                                    </S.FormSubTtl>

                                    <S.FormNewInput
                                        $error={errors.title}
                                        type="text"
                                        name="name"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />

                                    {errors.title && (
                                        <S.FormErrorBlock>
                                            {errors.title}
                                        </S.FormErrorBlock>
                                    )}
                                </S.FormNewBlock>
                                <S.FormNewBlock style={{ marginTop: '20px' }}>
                                    <S.FormSubTtl htmlFor="textArea">
                                        Описание задачи
                                    </S.FormSubTtl>

                                    <S.FormNewArea
                                        $error={errors.title}
                                        name="text"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
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
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <S.PopNewCardCalendar>
                                <S.FormSubTtl>
                                    <S.NewCardCalendarTtl>
                                        {' '}
                                        Даты
                                    </S.NewCardCalendarTtl>
                                </S.FormSubTtl>

                                <Calendar
                                    selectedDate={date}
                                    onDateSelect={setDate}
                                    isEditable={'true'}
                                    currentDate={date}
                                />
                            </S.PopNewCardCalendar>
                        </S.PopNewCardWrap>

                        <S.PopNewCardCategories>
                            <S.FormSubTtl style={{ marginBottom: '14px' }}>
                                <S.PopCategoriesP>Категория</S.PopCategoriesP>
                            </S.FormSubTtl>
                            <S.PopCategoriesTheme>
                                {['Web Design', 'Research', 'Copywriting'].map(
                                    (cat) => (
                                        <S.PopCategoryItem
                                            key={cat}
                                            $active={topic === cat}
                                            $category={cat}
                                            onClick={() =>
                                                handleCategoryClick(cat)
                                            }
                                        >
                                            <p>{cat}</p>
                                        </S.PopCategoryItem>
                                    )
                                )}
                            </S.PopCategoriesTheme>
                        </S.PopNewCardCategories>

                        <S.PopNewCardButton
                            type="button"
                            id="btnCreate"
                            onClick={handleCreate}
                        >
                            Создать задачу
                        </S.PopNewCardButton>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}
