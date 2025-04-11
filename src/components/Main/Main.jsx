import Column from '../Column/Column'
import { SMain } from './Main.styled'


const columnList = [
    'Без статуса',
    'Нужно сделать',
    'in-progress',
    'Тестирование',
    'Готово',
]

export default function Main({cardList}) {
    
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
                                    cards={cardList.tasks.filter((card) => {
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
