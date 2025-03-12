import { Card } from '../Card/Card'

export default function Column({ title, cards }) {
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            theme={card.theme}
                            date={card.date}
                            title={card.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}
