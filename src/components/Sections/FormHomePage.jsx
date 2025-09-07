import styled from "styled-components";
import { BtnPrimary } from "../Header/Header";
import { FlexSpaceBetween } from "./Advantages";

export default function FormHomePage() {
    return (
        <SectionForm>
            <TextContainer>
                <h2>Ще <span>не маєте власного</span> житла?</h2>
                <h3>Допоможемо підбрати варіант <span>саме для вас</span></h3>
            </TextContainer>
            <form>
                <FlexSpaceBetween style={{gap: '24px', marginBottom: '40px'}}>
                    <Input type="text" placeholder="Ім&#39;я" />
                    <Input type="tel" placeholder="Телефон" />
                </FlexSpaceBetween>
                <BtnPrimary type="submit" style={{ width: "100%" }}>Надіслати</BtnPrimary>
            </form>
        </SectionForm>
    );
}


export const SectionForm = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 60px 24px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    h2 {
        font-weight: 600;
        font-size: 64px;
        color: #000;
        width: 684px;
    }

    h3 {
        font-weight: 600;
        font-size: 48px;
        color: #000;
        width: 684px;
    }

    span {
        color: #006837;
    }
`;

export const Input = styled.input`
    border: 1px solid #000;
    border-radius: 5px;
    padding: 20px 24px;
    width: 330px;
    height: 60px;
    box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
    background: #fff;
    
    &:focus {
        outline: none;
        border-color: #006837;
    }
`;
