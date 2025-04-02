import { useNavigate } from 'react-router-dom'
import * as S from './SignIn.styled'
import React from 'react'
function SignIn({setIsAuth}) {
    const navigate = useNavigate()
    const handleLogin = () => {
        setIsAuth(true)
        navigate("/")
    }
    return (
        <S.Container>
            <S.Card>
                <S.Title>Вход</S.Title>
                <form>
                    <S.Input type="email" placeholder="Эл. почта" />
                    <S.Input type="password" placeholder="Пароль" />
                    <S.Button onClick={handleLogin} type="button">Войти</S.Button>
                </form>
                <S.Text>
                    Нужно зарегистрироваться?{' '}
                    <S.Link href="/signUp">Регистрируйтесь здесь</S.Link>
                </S.Text>
            </S.Card>
        </S.Container>
    )
}

export default SignIn
