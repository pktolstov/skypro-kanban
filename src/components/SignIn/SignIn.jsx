import { useNavigate } from 'react-router-dom'
import * as S from './SignIn.styled'
import { Link } from 'react-router-dom'

function SignIn({ setIsAuth }) {
    const navigate = useNavigate()
    const handleLogin = () => {
        setIsAuth(true)
        navigate('/')
    }
    return (
        <S.Container>
            <S.Card>
                <S.Title>Вход</S.Title>
                <form>
                    <S.Input type="email" placeholder="Эл. почта" />
                    <S.Input type="password" placeholder="Пароль" autoComplete="current-password"/>
                    <S.Button onClick={handleLogin} type="button">
                        Войти
                    </S.Button>
                </form>
                <S.Text>
                    <Link to="/signUp">Регистрируйтесь здесь</Link>
                </S.Text>
            </S.Card>
        </S.Container>
    )
}

export default SignIn
