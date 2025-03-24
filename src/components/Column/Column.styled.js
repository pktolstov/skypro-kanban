import styled from 'styled-components'
export const SColumn = styled.div`
    .main__column {
        width: 20%;
        margin: 0 auto;
        display: block;
    }

    .column__title {
        padding: 0 10px;
        margin: 15px 0;
    }
    .column__title p {
        color: #94a6be;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }

    .cards {
        width: 100%;
        display: block;
        position: relative;
    }
    @media screen and (max-width: 1200px) {
        .main__column {
            width: 100%;
            margin: 0 auto;
            display: block;
        }
        .cards {
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
    }
`
