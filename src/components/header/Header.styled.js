import styled from 'styled-components'
export const SHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;



    @media screen and (max-width: 495px) {
        .header__btn-main-new {
            z-index: 3;
            position: fixed;
            left: 16px;
            bottom: 30px;
            top: auto;
            width: calc(100vw - 32px);
            height: 40px;
            border-radius: 4px;
            margin-right: 0;
        }
    }

    @media screen and (max-width: 495px) {
        .container {
            width: 100%;
            padding: 0 16px;
        }
    }
`
export const HeaderContainer = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`
export const HeaderLogoImg = styled.img`
    width: 85px;
`

export const HeaderLogo = styled.div``
export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderButton = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

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

export const HeaderUser = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer; 

    a {
        color: #565eef;
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    &::after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid #565eef;
        border-bottom: 1.9px solid #565eef;
        transform: rotate(-45deg);
        margin-left: 5px;
        transition: all 0.2s ease;
    }

    &:hover {
        color: #33399b;

        a {
            color: #33399b;
        }

        &::after {
            border-left-color: #33399b;
            border-bottom-color: #33399b;
        }
    }
`

export const HeaderUserPop = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: auto;
    height: auto;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #fff;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`
export const HeaderUserPopName = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`

export const HeaderUserPopMail = styled.p`
    color: #94a6be;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`

export const HeaderUserPopTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    p {
        color: #000;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }
    & input[type='checkbox'] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }
    & input[type='checkbox']::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
}

& input:checked[type='checkbox']::before {
    left: 12px;
}
`
export const PopButtonLight = styled.button`
    width: 72px;
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
    color: #565eef;
    margin: 0 auto;
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