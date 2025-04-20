import styled from 'styled-components'

export const PopBrows = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`

export const PopBrowsContainer = styled.div`
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

export const PopBrowsBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;
`
export const PopBrowsContent = styled.div`
    display: block;
    text-align: left;
`
export const PopBrowsTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`

export const PopBrowsTtl = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`

export const PopBrowsStatus = styled.div`
    margin-bottom: 11px;
`
export const PopBrowsStatusP = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const PopBrowsStatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export const PopBrowsWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const PopBrowsForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`
export const PopFormBrowsBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormSubTtl = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const FormBrowserArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: #eaeef6;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-color: ${(props) =>
        props.$error ? '#ff4d4f' : 'rgba(148, 166, 190, 0.4)'};
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;

    /* .form-browse__area::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
}
.form-browse__area::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
} */
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

export const PopNewCardBtnBrows = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`

export const PopNewCardButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const PopCardButton = styled.button`
    width: 86px;
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

export const PopButtonLight = styled.button`
    width: 176px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;
    p {
        width: 100%;
        height: 100%;
        color: #565eef;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &:hover {
        background-color: #33399b;
        color: #ffffff;
    }
`

export const PopCategoriesTheme = styled.div`
    display: inline-block;
    width: 115px;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    text-align: center;

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
    }
`

export const PopCategoryItem = styled(PopCategoriesTheme)`
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

export const PopStatusTheme = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94a6be;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    width: auto;
    height: 30px;
    background-color: ${({ $active }) => ($active ? '#94A6BE' : '#FFF')};
    cursor: pointer;
    

    p {
        color: ${({ $active }) => ($active ? '#FFFFFF' : '#94A6BE')};
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
        white-space: nowrap;
    }
`
export const PopStatusThemeBlock = styled.div`
    display: flex;
    gap: 7px;
`


