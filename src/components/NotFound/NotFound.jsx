
import * as S from './NotFound.syled'


const NotFound = () => {
    return (
        <S.Container>
            <S.Title>404</S.Title>
            <S.Subtitle>Страница не найдена</S.Subtitle>
            <S.Button href="/">Вернуться на главную</S.Button>
        </S.Container>
    )
}

export default NotFound