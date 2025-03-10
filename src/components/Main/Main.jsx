import Card  from '../Card/Card.jsx'
import Column from '../Column/Column'
export default function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                    <Column
                        title= 'Без статуса'
                        children={[<Card id={2}/>,<Card id={1}/>,<Card id={0}/>]}
                        />
                        <Column
                        title= 'Нужно сделать'
                        children={[<Card id={0}/>,<Card id={2}/>]}
                        />
                        <Column
                        title= 'В работе'
                        children={[<Card id={2}/>,<Card id={1} />,<Card id={1}/>]}
                        />
                        <Column
                        title= 'Тестирование'
                        children={[<Card id={0}/>,<Card id={1}/>]}
                        />
                        <Column
                        title= 'Готово' 
                        children={[<Card id={0}/>]}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

