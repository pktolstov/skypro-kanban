import { Link } from 'react-router-dom'
import * as S from './Header.styled'
import { useState, useContext } from 'react'
import { getToken } from '../../services/auth'
import { ThemeContext } from '../../context/ThemeContext'
import { useTheme } from '../../context/ThemeProvider'
import { lightTheme,darkTheme } from '../../themes'

export default function Header() {
    const context = useContext(ThemeContext)
    const [isVisible, setIsVisible] = useState(false)
    const { theme, toggleTheme } = useTheme() // Получаем текущую тему и функцию переключения

    const getVisibility = () => {
        setIsVisible(!isVisible)
    }


    if (!context) {
        throw new Error('Header must be wrapped in ThemeProvider')
    }

    return (
        <S.SHeader>
            <S.HeaderContainer>
                <div className="header__block">
                    {/* Логотипы с условием отображения в зависимости от темы */}
                    <div
                        className={`header__logo ${
                            theme === lightTheme ? '_show' : '_hide'
                        }`}
                    >
                        <a href="" target="_self">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div
                        className={`header__logo ${
                            theme === darkTheme ? '_show' : '_hide'
                        }`}
                    >
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </div>

                    <nav className="header__nav">
                        <button className="header__btn-main-new _hover01">
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
                                    checked={theme === darkTheme}
                                    onChange={toggleTheme}
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

