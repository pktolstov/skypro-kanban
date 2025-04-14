import styled from 'styled-components';
export const CalendarWrapper = styled.div`
    width: 182px;
    margin-bottom: 20px;
`;

export const Title = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    font-weight: bold;
`;

export const DaysNames = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`;

export const DayName = styled.div`
    font-size: 10px;
    color: #94a6be;
    font-weight: 500;
`;

export const Cells = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 182px;
    height: 126px;
`;

export const Cell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.selected ? '#fff' : '#94a6be')};
    background-color: ${(props) => (props.selected ? '#4a90e2' : 'transparent')};
    font-size: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #d0e4ff;
    }
`;

export const Footer = styled.div`
    padding: 0 7px;
    margin-top: 10px;
    font-size: 10px;
    color: #94a6be;

    span {
        color: #000;
    }
`;

// .calendar__nav {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-top: 14px;
//     padding: 0 7px;
// }
// .calendar__period {
//     padding: 0 7px;
// }

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
    xmlns: "http://www.w3.org/2000/svg",
    width: "6",
    height: "11",
    viewBox: "0 0 6 11"
  })`
    fill: #94a6be;
    transition: fill 0.3s ease;
    
    &:hover {
      fill: #2e3a59;
    }
  `
