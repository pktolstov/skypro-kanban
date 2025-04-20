import styled from 'styled-components'
export const SColumn = styled.div`
  
       
        margin: 0 auto;
        display: block;
        min-width: 20%;

    /* .column__title {
        padding: 0 10px;
        margin: 15px 0;
        width: inherit;
    }
    .column__title p {
        color: #94a6be;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    } */

    /* .cards {
        width: 100%;
        display: block;
        position: relative;
    } */
    @media screen and (max-width: 1200px) {
        & {
            width: 100%;
            margin: 0 auto;
            display: block;
        }
        /* .cards {
            width: 100%;
            display: flex;
            overflow-y: auto;
        } */
    }
`
export const ColumnTile = styled.div`
    padding: 0 10px;
    margin: 15px 0;
    width: inherit;

    p {
        color: #94a6be;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }
`
export const ColumnCards = styled.div`
    width: 100%;
    display: block;
    position: relative;

    @media screen and (max-width: 1200px) {
        & {
            width: 100%;
            display: flex;
            overflow-y: auto;
        }
    }
`
