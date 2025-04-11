import { Card } from '../Card/Card'
import { SColumn } from './Column.styled'
export default function Column({ title, cards }) {
    return (
        <SColumn className="main__column">
            <div className="column__title">
                <p>{title === 'in-progress' ? (title = ' В работе') : title}</p>
            </div>
            <div className="cards">
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
            </div>
        </SColumn>
    )
}
