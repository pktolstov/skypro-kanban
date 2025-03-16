import Column from '../Column/Column'
import { cardList } from '../../data'
import { SMain } from './Main.styled'
const columnList = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
]
export default function Main() {
    return (
        <SMain className="main">
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
        </SMain>
    )
}
