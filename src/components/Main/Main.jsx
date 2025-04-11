import Column from '../Column/Column'
import { SMain } from './Main.styled'
import { CardsProvider } from '../../context/CardsProvider'

const columnList = [
    'Без статуса',
    'Нужно сделать',
    'in-progress',
    'Тестирование',
    'Готово',
]

export default function Main({ cardList }) {
    return (
        <CardsProvider>
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
        </CardsProvider>
    )
}
