import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Calendar from '../Calendar/Calendar'
import { useContext } from 'react'
import { CardsContext } from '../../context/CardsContext'
export default function PopBrowse() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { cards, updateCard, removeCard } = useContext(CardsContext)
    const [isEditable, setIsEditable] = useState(false)
    const [errors, setErrors] = useState({})
    const [error, setError] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
    const [card, setCard] = useState(null)
    const [status, setStatus] = useState('') // Состояние выбранного статуса
    const [originalData, setOriginalData] = useState(null)
    useEffect(() => {
        const foundCard = cards.find((c) => c._id === id)
        if (foundCard) {
            setCard(foundCard)
            setStatus(foundCard.status)
            setSelectedDate(dayjs(foundCard.date).format('DD.MM.YYYY') )
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
            newErrors.description = 'Описание должно содержать минимум 10 символов'
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
                date: dayjs(selectedDate, 'DD.MM.YYYY').toISOString() || card.date,
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
        // Восстанавливаем оригинальные данные
        setCard({
            ...card,
            description: originalData.description,
            status: originalData.status,
            date: originalData.date,
        })
        setStatus(originalData.status)
        setSelectedDate(originalData.date)
        setIsEditable(false)
    }

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h2 className="pop-browse__ttl">ID: {id}</h2>
                            <h3 className="pop-browse__ttl">{card?.title}</h3>
                            <div
                                className="categories__theme theme-top _active-category"
                                style={{
                                    backgroundColor:
                                        card?.topic === 'Web Design'
                                            ? '#ffe4c2'
                                            : card?.topic === 'Research'
                                            ? '#b4fdd1'
                                            : card?.topic === 'Copywriting'
                                            ? '#e9d4ff'
                                            : '',
                                }}
                            >
                                <p
                                    className={
                                        card?.topic === 'Web Design'
                                            ? '_orange'
                                            : card?.topic === 'Research'
                                            ? '_green'
                                            : card?.topic === 'Copywriting'
                                            ? '_purple'
                                            : ''
                                    }
                                >
                                    {card?.topic}
                                </p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                {[
                                    'Без статуса',
                                    'Нужно сделать',
                                    'in-progress',
                                    'Тестирование',
                                    'Готово',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className={classNames('status__theme', {
                                            _hide: !isEditable,
                                            _gray: false,
                                        })}
                                        style={{
                                            backgroundColor:
                                                status === item
                                                    ? '#94A6BE'
                                                    : '',
                                            color:
                                                status === item ? '#fff' : '', // ← добавили!
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            if (isEditable) setStatus(item)
                                        }}
                                    >
                                        <p>
                                            {item === 'in-progress'
                                                ? 'В работе'
                                                : item}
                                        </p>
                                    </div>
                                ))}
                                {!isEditable && (
                                    <div className="status__theme _gray">
                                        <p>
                                            {card?.status === 'in-progress'
                                                ? 'В работе'
                                                : card?.status}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form
                                className="pop-browse__form form-browse"
                                id="formBrowseCard"
                                action="#"
                            >
                                <div className="form-browse__block">
                                    <label
                                        htmlFor="textArea01"
                                        className="subttl"
                                    >
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className={`form-browse__area ${errors.description ? '_error' : ''}`}
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
                                    ></textarea>
                                    {errors.description && <div className="form-error">{errors.description}</div>}
                                    {error && <div className="form-error">{error}</div>}
                                </div>
                            </form>
                            <div className="pop-new-card__calendar calendar">
                                <p className="calendar__ttl subttl">Даты</p>
                                <Calendar
                                    selectedDate={
                                        selectedDate ||
                                        dayjs(card?.date).format('DD.MM.YYYY')
                                    }
                                    onDateSelect={(date) =>
                                        isEditable && setSelectedDate(date)
                                    }
                                    isEditable={isEditable}
                                />
                            </div>
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div
                            className={classNames('pop-browse__btn-browse', {
                                _hide: isEditable,
                            })}
                        >
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn-browse__edit _btn-bor _hover03"
                                    onClick={handleEdit}
                                >
                                    Редактировать задачу
                                </button>

                                <button
                                    className="btn-browse__delete _btn-bor _hover03"
                                    type="button"
                                    onClick={handleDelete}
                                >
                                    Удалить задачу
                                </button>
                            </div>
                            <button
                                className="btn-browse__close _btn-bg _hover01"
                                onClick={() => navigate('/')}
                            >
                                Закрыть
                            </button>
                        </div>
                        <div
                            className={classNames('pop-browse__btn-edit', {
                                _hide: !isEditable,
                            })}
                        >
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn-edit__edit _btn-bg _hover01"
                                    onClick={handleSave}
                                >
                                    Сохранить
                                </button>
                                <button
                                    className="btn-edit__edit _btn-bor _hover03"
                                    type="button"
                                    onClick={handleCancel}
                                >
                                    Отменить
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                    type="button"
                                    onClick={handleDelete}
                                >
                                    Удалить задачу
                                </button>
                            </div>
                            <button
                                type="button"
                                className="btn-edit__close _btn-bg _hover01"
                                onClick={() => navigate('/')}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
