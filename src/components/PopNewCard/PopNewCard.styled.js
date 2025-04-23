import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PopNewCard = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
`
export const PopNewCardContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;
`

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`
export const PopNewCardTtl = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`
export const PopNewCardLink = styled(Link)`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94a6be;
    cursor: pointer;
    &:hover {
        color: #000000;
    }
`
export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
export const PopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`

export const PopNewCardButton = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #ffffff;
    float: right;
    a {
        width: 100%;
        height: 100%;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:hover {
        background-color: #33399b;
    }
`

export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;

 
`

export const FormSubTtl = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const FormNewInput = styled.input`
    width: 100%;
    margin-top: 20px;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid;
    border-color: ${(props) =>
        props.$error ? '#ff4d4f' : 'rgba(148, 166, 190, 0.4)'};
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    &:-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
`
export const FormNewArea = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid;
    border-color: ${(props) =>
        props.$error ? '#ff4d4f' : 'rgba(148, 166, 190, 0.4)'};
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    &:-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
`

export const FormErrorBlock = styled.div`
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 12px;
`
export const PopNewCardCalendar = styled.div`
    width: 182px;
    margin-bottom: 20px;
`
export const NewCardCalendarTtl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
`
export const PopNewCardCategories = styled.div`
    margin-bottom: 20px;
`

export const PopCategoriesTheme = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`
export const PopCategoriesP = styled.p`
    margin-bottom: 14px;
`

export const PopActiveCategories = styled.div`
    opacity: 1 !important;
`


export const PopCategoriesThemes = styled.div`
     display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    }

`



export const PopCategoryItem = styled(PopCategoriesThemes)`
  background-color: ${({ $active, $category }) =>
    $active
      ? $category === 'Web Design'
        ? '#FFE4C2'
        : $category === 'Research'
        ? '#B4FDD1'
        : '#E9D4FF'
      : $category === 'Web Design'
        ? '#ffe4c2' 
        : $category === 'Research'
        ? '#B4FDD1' 
        : '#e9d4ff'}; 
    opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  
  color: ${({ $active, $category }) =>
    $active
      ? $category === 'Web Design'
        ? '#FF6D00'
        : $category === 'Research'
        ? '#06B16E'
        : '#9a48f1'
      : $category === 'Web Design'
        ? 'rgba(255, 109, 0, 0.5)' 
        : $category === 'Research'
        ? '#06b16e' 
        : 'rgba(154, 72, 241, 0.5)'}; 
  

  

  
  &:hover {
    opacity: ${({ $active }) => ($active ? 1 : 0.5)};
    cursor: pointer;
  }
  
  p {
    margin: 0;
    font-weight: ${({ $active }) => ($active ? '600' : '400')};
  }
`;
