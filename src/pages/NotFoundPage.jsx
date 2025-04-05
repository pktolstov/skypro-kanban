import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f3f4f6;
    text-align: center;
    font-family: Arial, sans-serif;
`

const Title = styled.h1`
    font-size: 6rem;
    color: #2563eb;
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

const Subtitle = styled.h2`
    font-size: 2rem;
    color: #374151;
    margin-bottom: 16px;
`

const Button = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 18px;
    color: white;
    background-color: #2563eb;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
        background-color: #1e40af;
    }
`

const NotFoundPage = () => {
    return (
        <Container>
            <Title>404</Title>
            <Subtitle>Страница не найдена</Subtitle>
            <Button href="/">Вернуться на главную</Button>
        </Container>
    )
}

export default NotFoundPage
