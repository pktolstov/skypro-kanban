import * as S from '../SignIn/SignIn.styled'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <S.Container>
            <S.Card>
                <S.Title>Вход</S.Title>
                <form>
                    <S.Input type="text" placeholder="Имя" />
                    <S.Input type="email" placeholder="Эл. почта" />
                    <S.Input type="password" placeholder="Пароль" autoComplete="current-password"/>
                    <S.Button type="submit">Зарегистрироваться</S.Button>
                </form>
                <S.Text>
                    Уже есть аккаунт? <span><Link to="/signIn">Войдите здесь {' '}</Link></span> 
                        
                    
                </S.Text>
            </S.Card>
        </S.Container>
    )
}

export default SignUp
