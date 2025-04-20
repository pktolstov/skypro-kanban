import styled from 'styled-components'
export const CalendarWrapper = styled.div`
    width: 182px;
    margin-bottom: 20px;
`

export const CalendarBlock = styled.div`
    display: block;
    padding-bottom:10px;

`

export const CalendarMonth = styled.div`
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
`
export const CalendarWeek = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`
export const CalendarCells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
`
export const CalendarCell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    gap: 12px;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94a6be;
    font-size: 10px;
    line-height: -1;
    letter-spacing: -0.2px;
    cursor: pointer;
    ._today {
        font-weight: bold;
    }
`
export const CalendarDayName = styled.div`
    color: #94a6be;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
`
export const CalendarPeriod = styled.div`
    padding: 0 7px;
    margin-top: 14px;
    p {
        font-weight: 400;
        font-size: 10px;
        color: #94a6be;
        line-height: 1;
        span {
            color: #000
        }
    }
`
export const Title = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    font-weight: bold;
`

export const DaysNames = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`

export const DayName = styled.div`
    font-size: 10px;
    color: #94a6be;
    font-weight: 500;
`

export const Cells = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 182px;
    height: 126px;
`

export const Cell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.selected ? '#fff' : '#94a6be')};
    background-color: ${(props) =>
        props.selected ? '#4a90e2' : 'transparent'};
    font-size: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #d0e4ff;
    }
`

export const Footer = styled.div`
    padding: 0 7px;
    margin-top: 10px;
    font-size: 10px;
    color: #94a6be;

    span {
        color: #000;
    }
`

export const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
`

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavAction = styled.div`
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NavSvg = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    width: '6',
    height: '11',
    viewBox: '0 0 6 11',
})`
    fill: #94a6be;
    transition: fill 0.3s ease;

    &:hover {
        fill: #2e3a59;
    }
`



// ._other-month {
//     opacity: 0;
// }

// ._cell-day:hover {
//     color: #94a6be;
//     background-color: #eaeef6;
// }

// ._active-day {
//     background-color: #94a6be;
//     color: #ffffff;
// }

// ._current {
//     font-weight: 700;
// }