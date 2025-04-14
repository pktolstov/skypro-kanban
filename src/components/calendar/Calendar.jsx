import { useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

import * as S from './Calendar.styled'
dayjs.locale('ru')
export default function Calendar({ selectedDate, onDateSelect }) {

    // const [selectedDay, setSelectedDay] = useState(selectedDate)
    const [currentMonth, setCurrentMonth] = useState(dayjs())

    const startOfMonth = currentMonth.startOf('month')
    const endOfMonth = currentMonth.endOf('month')
    const startDay = startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1 // Понедельник = 0
    const daysInMonth = endOfMonth.date()

    const isToday = (day) => {
        const today = dayjs().date()

        return day === today ? true : false
    }
    const generateCalendar = () => {
        const days = []

        const prevMonth = currentMonth.subtract(1, 'month')
        const daysInPrevMonth = prevMonth.daysInMonth()

        // Заполнить начальные дни прошлого месяца
        for (let i = startDay - 1; i >= 0; i--) {
            const date = prevMonth.date(daysInPrevMonth - i)
            days.push({ date, isCurrentMonth: false })
        }

        // Текущий месяц
        for (let i = 1; i <= daysInMonth; i++) {
            const date = currentMonth.date(i)

            days.push({ date, isCurrentMonth: true })
        }

        // Оставшиеся дни следующего месяца
        const nextDays = 42 - days.length
        const nextMonth = currentMonth.add(1, 'month')
        for (let i = 1; i <= nextDays; i++) {
            const date = nextMonth.date(i)
            days.push({ date, isCurrentMonth: false })
        }

        return days
    }

    const handleDateClick = (date) => {
        const formattedDate = date.format('DD.MM.YYYY')

        onDateSelect(formattedDate)
    }

    const isSelected = (date) => selectedDate === date.format('DD.MM.YYYY')

    return (
        <div className="calendar__block">
            <S.Nav>
                <div className="calendar__month">
                    {currentMonth
                        .format('MMMM YYYY')
                        .replace(/^[а-яА-Я]/, (c) => c.toUpperCase())}
                </div>
                <S.NavActions>
                    <S.NavAction
                        className="nav__action"
                        onClick={() =>
                            setCurrentMonth(currentMonth.subtract(1, 'month'))
                        }
                    >
                        <S.NavSvg>
                            <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </S.NavSvg>
                    </S.NavAction>
                    <S.NavAction
                        className="nav__action"
                        onClick={() =>
                            setCurrentMonth(currentMonth.add(1, 'month'))
                        }
                    >
                        <S.NavSvg>
                            <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </S.NavSvg>
                    </S.NavAction>
                </S.NavActions>
            </S.Nav>

            <div className="calendar__days-names">
                {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((d) => (
                    <div key={d} className="calendar__day-name">
                        {d}
                    </div>
                ))}
            </div>

            <div className="calendar__cells">
                {generateCalendar().map(({ date, isCurrentMonth }, index) => (
                    <div
                        key={index}
                        className={`calendar__cell ${
                            isCurrentMonth ? '_cell-day' : '_other-month'
                        } ${isSelected(date) ? '_active-day' : ''} ${
                            date.day() === 0 || date.day() === 6
                                ? '_weekend'
                                : ''
                        } `}
                        onClick={() => handleDateClick(date)}
                        style={{
                            fontWeight: isToday(date.date()) ? '1000' : '400',
                        }}
                    >
                        {date.date()}
                    </div>
                ))}
            </div>

            <input
                type="hidden"
                id="datepick_value"
                value={selectedDate || ''}
            />
            <div className="calendar__period">
                <p className="calendar__p date-end">
                    {!selectedDate
                        ? 'Выберите срок исполнения '
                        : 'Срок исполнения: '}
                    <span className="date-control">{selectedDate || ''}</span>
                </p>
            </div>
        </div>
    )
}


