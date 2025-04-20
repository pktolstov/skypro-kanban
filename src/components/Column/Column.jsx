import { Card } from '../Card/Card'
import * as S from './Column.styled'
export default function Column({ title, cards }) {
    return (
        <S.SColumn >
<S.ColumnTile>
<p>{title === 'in-progress' ? (title = ' В работе') : title}</p>
</S.ColumnTile>

            <S.ColumnCards>
            {cards.map((card) => {
                    return (
                        <Card
                            key={card._id}
                            theme={card.topic}
                            date={card.date}
                            title={card.title}
                            id={card._id}
                        />
                    )
                })}

            </S.ColumnCards>
        </S.SColumn>
    )
}
