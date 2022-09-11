import styled from "styled-components";

export const DeliveryContainer =styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1{
        color: ${(props) => props.theme.colors['yellow-dark']};
    }

    > section{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const DeliveryDetailsContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme.colors['background']};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        inset: -1px;
        z-index: -1;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);

    }
`
