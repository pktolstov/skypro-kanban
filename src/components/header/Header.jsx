import { Link } from 'react-router-dom'
import * as S from './Header.styled'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { getToken } from '../../services/auth'
import { ThemeContext } from '../../context/ThemeContext'
import { useTheme } from '../../context/ThemeProvider'
import { lightTheme, darkTheme } from '../../themes'
import { AuthContext } from '../../context/AuthContext'

export default function Header() {
    const [user, setUser] = useState(getToken())
    const navigate = useNavigate()
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
                <S.HeaderBlock>
                    {theme === lightTheme && (
                        <S.HeaderLogo>
                            <Link to="/" target="_self">
                                <S.HeaderLogoImg
                                    src="images/logo.png"
                                    alt="logo"
                                />
                            </Link>
                        </S.HeaderLogo>
                    )}

                    {theme === darkTheme && (
                        <S.HeaderLogo>
                            <Link to="/" target="_self">
                                <S.HeaderLogoImg
                                    src="images/logo_dark.png"
                                    alt="logo"
                                />
                            </Link>
                        </S.HeaderLogo>
                    )}
                    <S.HeaderNav>
                        <S.HeaderButton onClick={() => navigate('/newcard')}>
                            Создать новую задачу
                        </S.HeaderButton>
                        <S.HeaderUser onClick={getVisibility}>
                            <Link>
                                {user ? getToken().name : ''}
                            </Link>
                        </S.HeaderUser>
                        {isVisible && (
                            <S.HeaderUserPop>
                                <S.HeaderUserPopName>
                                {getToken().name ? getToken().name : ''}
                                </S.HeaderUserPopName>
<S.HeaderUserPopMail>{getToken().login ? getToken().login : ''}</S.HeaderUserPopMail>
 
<S.HeaderUserPopTheme>
<p>Темная тема</p>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        name="checkbox"
                                        checked={theme === darkTheme}
                                        onChange={toggleTheme}
                                    /> 
</S.HeaderUserPopTheme>

<S.PopButtonLight  onClick={() => navigate('/exit')} type="button">
Выйти
</S.PopButtonLight>

                            </S.HeaderUserPop>
                        )}
 
                    </S.HeaderNav>
                </S.HeaderBlock>
            </S.HeaderContainer>
        </S.SHeader>
    )
}
