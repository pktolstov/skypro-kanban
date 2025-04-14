import { Link } from 'react-router-dom'
import * as S from './Header.styled'
import { useState } from 'react'
import { getToken } from '../../services/auth'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)
    const getVisibility = () => {
        setIsVisible(!isVisible)
    }
    return (
        <S.SHeader>
            <S.HeaderContainer>
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </div>
                    <nav className="header__nav">
                        <button
                            className="header__btn-main-new _hover01"
                            id="btnMainNew"
                        >
                            <Link to="/newcard">Создать новую задачу</Link>
                            
                        </button>
                        <a
                            onClick={getVisibility}
                            href="#user-set-target"
                            className="header__user _hover02"
                        >
                            {getToken().name}
                        </a>
                        <div
                            style={{ display: isVisible ? 'block' : 'none' }}
                            className="header__pop-user-set pop-user-set"
                            id="user-set-target"
                        >
                            <p className="pop-user-set__name">
                                {getToken().name}
                            </p>
                            <p className="pop-user-set__mail">
                                {getToken().login}
                            </p>
                            <div className="pop-user-set__theme">
                                <p>Темная тема</p>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    name="checkbox"
                                />
                            </div>
                            <button type="button" className="_hover03">
                                <Link to="/exit">Выйти</Link>
                            </button>
                        </div>
                    </nav>
                </div>
            </S.HeaderContainer>
        </S.SHeader>
    )
}
