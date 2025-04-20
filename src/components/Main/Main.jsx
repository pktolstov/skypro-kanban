import Column from '../Column/Column'
import * as S from './Main.styled'
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
        <S.Main>
            <S.Container>
                <S.MainBlock>
                    <S.MainContent>
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
                    </S.MainContent>
                </S.MainBlock>
            </S.Container>
        </S.Main>
    )
}
