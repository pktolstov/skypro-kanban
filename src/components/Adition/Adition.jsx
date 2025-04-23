import { ClipLoader } from 'react-spinners'
import {  useNavigate } from 'react-router-dom'
import * as S from './Adition.styled'

export const Loader = () => {
    return (
        <S.EmptyCardPop
        style={{justifySelf:'center'}}
        >
         

            <S.PopExitTtl>Идет загрузка...</S.PopExitTtl>
            <ClipLoader color="#3936d7" size={100} />
           

        </S.EmptyCardPop>
    )
}

export function LoadExpect() {
    return <S.PopExitTtl>Идет загрузка...</S.PopExitTtl>
}


export function EmptyCardsPage() {
    const handleClose = () => {
        const popup = document.getElementById('popExit')
        if (popup) popup.style.display = 'none'
    }
    const navigate = useNavigate()

    return (
        <S.PopExit id="popExit">
            <S.PopContainer>
                <S.PopExitBlock>
                    <S.PopExitTtl>У Вас еще нет созданных задач</S.PopExitTtl>

                    <S.PopExitFormGroup>
                        <S.PopExitButton
                            onClick={() => navigate('/newcard')}
                            id="exitYes"
                        >
                            Создать
                        </S.PopExitButton>
                        <S.PopExitNo id="exitNo" onClick={handleClose}>
                           <a>Нет, остаться</a> 
                        </S.PopExitNo>
                    </S.PopExitFormGroup>
                </S.PopExitBlock>
            </S.PopContainer>
        </S.PopExit>
    )
}
