import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import Calendar from '../Calendar/Calendar'
import { useContext } from 'react'
import { CardsContext } from '../../context/CardsContext'
export default function PopBrowse() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { cards, updateCard } = useContext(CardsContext)
    const [isEditable, setIsEditable] = useState(false)
    const [card, setCard] = useState(null)
    const [status, setStatus] = useState('') // Состояние выбранного статуса
    const [originalData, setOriginalData] = useState(null)
    useEffect(() => {
        const foundCard = cards.find((c) => c._id === id)
        if (foundCard) {
            setCard(foundCard)
            setStatus(foundCard.status)
            setOriginalData({
                // Сохраняем оригинальные данные
                description: foundCard.description,
                status: foundCard.status,
                date: foundCard.date,
            })
        }
    }, [id, cards])

    const handleSave = async () => {
        const updated = {
            ...card,
            description: card.description, // обнови что нужно
            // status: ...
        }
        await updateCard({ card: updated, id })
        
        setIsEditable(false) // После сохранения выключаем редактирование
     
        // navigate('/')
    }
    const handleEdit = () => {
        setIsEditable(true) // Включаем редактирование
    }
    const handleCancel = () => {
        // Восстанавливаем оригинальные данные
        setCard({
            ...card,
            description: originalData.description,
        })
        setStatus(originalData.status)
        setIsEditable(false)
    }

    // {classNames('status__theme', { '_hide': card?.status !== 'Без статуса' })}
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
                            <div
                                    className={classNames('status__theme', '_gray', {
                                        _hide: isEditable,
                                       
                                    })}
                                >
                                    <p>{card?.status}</p>
                                </div>
                                <div
                                    className={classNames('status__theme', {
                                        _hide: !isEditable,
                                        _gray: card?.status === 'Без статуса',
                                    })}
                                >
                                    <p>Без статуса</p>
                                </div>
                                <div
                                    className={classNames('status__theme', {
                                        _hide: !isEditable,
                                        _gray: card?.status === 'Нужно сделать',
                                    })}
                                >
                                    <p>Нужно сделать</p>
                                </div>
                                <div
                                    className={classNames('status__theme', {
                                        _hide: !isEditable,
                                        _gray: card?.status === 'in-progress',
                                    })}
                                >
                                    <p>
                                        {' '}
                                        {card?.status === 'in-progress'
                                            ? 'В работе'
                                            : card?.status}
                                    </p>
                                </div>
                                <div
                                    className={classNames('status__theme', {
                                        _hide: !isEditable,
                                        _gray: card?.status === 'Тестирование',
                                    })}
                                >
                                    <p>Тестирование</p>
                                </div>
                                <div
                                    className={classNames('status__theme', {
                                        _hide: !isEditable,
                                        _gray: card?.status === 'Готово',
                                    })}
                                >
                                    <p>Готово</p>
                                </div>
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
                                        className="form-browse__area"
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
                                                : '', // Меняем фон в зависимости от редактирования
                                            transition:
                                                'background-color 0.3s ease', // Плавное изменение фона
                                        }}
                                    ></textarea>
                                </div>
                            </form>
                            <div className="pop-new-card__calendar calendar">
                                <p className="calendar__ttl subttl">Даты</p>
                                <Calendar />
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
                                    onClick={handleEdit} // Включаем редактирование
                                >
                                    Редактировать задачу
                                </button>

                                <button className="btn-browse__delete _btn-bor _hover03">
                                    <a href="#">Удалить задачу</a>
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
                                >
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button
                                type="button"
                                className="btn-edit__close _btn-bg _hover01"
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
