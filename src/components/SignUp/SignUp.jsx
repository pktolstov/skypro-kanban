import * as S from '../SignIn/SignIn.styled'
import React from 'react'
function SignUp() {
    return (
        <S.Container>
            <S.Card>
                <S.Title>Вход</S.Title>
                <form>
                    <S.Input type="text" placeholder="Имя" />
                    <S.Input type="email" placeholder="Эл. почта" />
                    <S.Input type="password" placeholder="Пароль" />
                    <S.Button type="submit">Зарегистрироваться</S.Button>
                </form>
                <S.Text>
                    Уже есть аккаунт? <span><S.Link href="/signIn">Войдите здесь</S.Link></span>  {' '}
                    
                </S.Text>
            </S.Card>
        </S.Container>
    )
}

export default SignUp
