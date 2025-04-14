
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f3f4f6;
    text-align: center;
    font-family: Arial, sans-serif;
`

export const Title = styled.h1`
    font-size: 6rem;
    color: #565eef;
    margin: 0;
    animation: bounce 1s infinite alternate;

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }
`

export const Subtitle = styled.h2`
    font-size: 2rem;
    color: #374151;
    margin-bottom: 16px;
`

export const Button = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 18px;
    color: white;
    background-color: #565eef;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
        background-color: #1e40af;
    }
`


