import Column from '../Column/Column'
import { cardList } from '../../data'
const columnList = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
]
export default function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {columnList.map((column) => {
                            return (
                                <Column
                                    title={column}
                                    key={column}
                                    cards={cardList.filter((card) => {
                                        return card.status === column
                                    })}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
