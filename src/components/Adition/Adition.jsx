import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
const Loader = () => {
    return (
        <div
            className="loader"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div className="pop-exit__ttl">
                <h2>Идет загрузка...</h2>
            </div>
            <ClipLoader color="#3936d7" size={100} /> 
        </div>
    )
}

export function LoadExpect() {
    return (
        <div className="pop-exit__ttl">
            <h2>Идет загрузка...</h2>
        </div>
    )
}

export function EmptyCardsPage() {
    const handleClose = () => {
        const popup = document.getElementById('popExit')
        if (popup) popup.style.display = 'none'
    }

    return (
        <div className="pop-exit" id="popExit">
            <div className="pop-exit__container">
                <div className="pop-exit__block">
                    <div className="pop-exit__ttl">
                        <h2>У Вас еще нет созданных задач</h2>
                    </div>
                    <div className="pop-exit__form-group">
                        <Link
                            to="/newcard"
                            className="pop-exit__exit-yes _hover01"
                        >
                            Создать
                        </Link>

                        <button
                            onClick={handleClose}
                            className="pop-exit__exit-yes _hover03"
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
