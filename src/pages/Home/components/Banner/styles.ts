import styled from "styled-components";
import { TitleText } from "../../../../components/Typography";

export const BannerContainer = styled.section`
    background: repeating-linear-gradient(
            40deg, #FAFAFA 0, #F1E7D8 40px, 
            #FAFAFA 40px, #FAFAFA 80px);
    width: 100%;
    height: 34rem;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const BannerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`;

export const BannerTitle = styled(TitleText)`
    margin-bottom: 1rem;

`

export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25rem;
    margin-top: 4.125rem;

`

