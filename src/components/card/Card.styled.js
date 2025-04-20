import styled from 'styled-components'

export const SCard = styled.div`
    /* .cards__item {
        padding: 5px;
        animation-name: card-animation;
        animation-duration: 500ms;
        animation-timing-function: linear;
    } */
    /* .cards__card {
        width: 220px;
        height: 130px;
        background-color: #ffffff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    } */

    /* .card__group {
        width: 100%;
        height: 20px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    } */
    /* .card__theme {
        width: auto;
        height: 20px;
        padding: 5px 14px;
        border-radius: 18px;
    }
    .card__theme p {
        font-size: 10px;
        font-weight: 600;
        line-height: 10px;
    } */
    /* .card__btn {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2px;
    }
    .card__btn div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #94a6be;
    } */
    /* .card__title {
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        color: #000000;
        margin-bottom: 10px;
    } */
    /* .card__content {
        height: 64px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    } */
    /* .card__date {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .card__date svg {
        width: 13px;
    }
    .card__date p {
        margin-left: 6px;
        font-size: 10px;
        line-height: 13px;
        color: #94a6be;
        letter-spacing: 0.2px;
    } */
    @media screen and (max-width: 1200px) {
        .cards__card {
            width: 220px;
            height: 130px;
            background-color: #ffffff;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: stretch;
            padding: 15px 13px 19px;
        }
    }
`

export const CardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({ $theme }) => {
            return `${$theme.backgroundColor};`
        }}
        p {
        font-size: 10px;
        font-weight: 600;
        line-height: 10px;
    }
    
`

export const CardsItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`

export const CardsCard = styled.div`
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
`
export const CardsGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardBtn = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;

    & div {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #94a6be;
    }
`

export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
export const CardsTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
`
export const CardDate = styled.div`


        display: flex;
        align-items: center;
        justify-content: flex-start;

    & svg {
        width: 13px;
    }
    & p {
        margin-left: 6px;
        font-size: 10px;
        line-height: 13px;
        color: #94a6be;
        letter-spacing: 0.2px;
    }

`




export const PopCategoryItem = styled(CardTheme)`
    background-color: ${({ $category }) =>
        $category === 'Web Design'
            ? '#FFE4C2'
            : $category === 'Research'
            ? '#B4FDD1'
            : '#E9D4FF'};
    opacity: 1;
    color: ${({ $category }) =>
        $category === 'Web Design'
            ? '#FF6D00'
            : $category === 'Research'
            ? '#06B16E'
            : '#9a48f1'};

    p {
        margin: 0;
    }
`