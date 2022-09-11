import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
`
export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const CoffeeCartContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.25rem;


        img{
            width: 4rem;
            height: 4rem;
        }
    }

    > p{
        align-self: flex-start;
        font-weight: 700;
    }

`
