import { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CardsContext } from '../../context/CardsContext'
import dayjs from 'dayjs'

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

        // Проверка названия (удаляем пробелы по краям и проверяем длину)
        if (!title.trim()) {
            newErrors.title = 'Название задачи обязательно'
        } else if (title.trim().length < 3) {
            newErrors.title = 'Название должно содержать минимум 3 символа'
        }

        // Проверка описания (необязательное поле, но если заполнено - проверяем)
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
        <div className="pop-new-card" id="popNewCard">
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>
                        <Link to="/" className="pop-new-card__close">
                            &#10006;
                        </Link>
                        {/* <a href="#" className="pop-new-card__close">
                            &#10006;
                        </a> */}
                        <div className="pop-new-card__wrap">
                            <form
                                className="pop-new-card__form form-new"
                                id="formNewCard"
                                onSubmit={handleCreate}
                            >
                                <div className="form-new__block">
                                    <label
                                        htmlFor="formTitle"
                                        className="subttl"
                                    >
                                        Название задачи
                                    </label>
                                    <input
                                        className={`form-new__input ${
                                            errors.title ? '_error' : ''
                                        }`}
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
                                        <div className="form-error">
                                            {errors.title}
                                        </div>
                                    )}
                                </div>
                                <div className="form-new__block">
                                    <label
                                        htmlFor="textArea"
                                        className="subttl"
                                    >
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className={`form-new__area ${
                                            errors.description ? '_error' : ''
                                        }`}
                                        name="text"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    ></textarea>
                                    {errors.description && (
                                        <div className="form-error">
                                            {errors.description}
                                        </div>
                                    )}
                                    {error && (
                                        <div className="form-error">
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </form>
                            <div className="pop-new-card__calendar calendar">
                                <p className="calendar__ttl subttl">Даты</p>
                                <Calendar
                                    selectedDate={date}
                                    onDateSelect={setDate}
                                />
                            </div>
                        </div>

                        <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                {['Web Design', 'Research', 'Copywriting'].map(
                                    (cat) => (
                                        <div
                                            key={cat}
                                            className={`categories__theme ${
                                                topic === cat
                                                    ? '_active-category'
                                                    : ''
                                            } ${
                                                cat === 'Web Design'
                                                    ? '_orange'
                                                    : cat === 'Research'
                                                    ? '_green'
                                                    : '_purple'
                                            }`}
                                            onClick={() =>
                                                handleCategoryClick(cat)
                                            }
                                        >
                                            <p>{cat}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="form-new__create _hover01"
                            id="btnCreate"
                            onClick={handleCreate}
                        >
                            Создать задачу
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
