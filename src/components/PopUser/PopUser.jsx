import * as S from './PopUser.styled'
import { Link, useNavigate } from 'react-router-dom'
function PopUser({ setIsAuth }) {
    const navigate = useNavigate()
    const handleLogout = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('userInfo')
        navigate('/signIn')
    }
    return (
        <S.PopExit id="popExit">
            <S.PopContainer>
                <S.PopExitBlock>
                    <S.PopExitTtl>Выйти из аккаунта?</S.PopExitTtl>
              
                        <S.PopExitFormGroup>
                            <S.PopExitButton onClick={handleLogout} id="exitYes">
                                Да, выйти
                            </S.PopExitButton>
                            <S.PopExitNo id="exitNo">
                                <Link to="/">Нет, остаться</Link>
                            </S.PopExitNo>
                        </S.PopExitFormGroup>
                 
                </S.PopExitBlock>
            </S.PopContainer>
        </S.PopExit>
    )
}

export default PopUser
