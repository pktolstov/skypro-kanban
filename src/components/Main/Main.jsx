import Column from '../Column/Column'
import { SMain } from './Main.styled'
import { useContext } from 'react'
import { CardsContext } from '../../context/CardsContext'

const columnList = [
    'Без статуса',
    'Нужно сделать',
    'in-progress',
    'Тестирование',
    'Готово',
]

export default function Main() {
    const { cards } = useContext(CardsContext)


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
                                        cards={cards.filter((card) => {
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
