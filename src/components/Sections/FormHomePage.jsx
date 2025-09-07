import { useState } from "react";
import styled from "styled-components";
import { BtnPrimary } from "../Header/Header";
import { FlexSpaceBetween } from "./Advantages";

export default function FormHomePage({setShowThanksModal}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append("type", "form1");
        formData.append("name", name.trim());
        formData.append("phone", phone.trim());

        await fetch("https://script.google.com/macros/s/AKfycbyNA9MQdS6iVOu8dV_d0t4hTzP-kyYbZRMBU5cg-mFA_LOkRxf3kP6Xh-8u_MSVWVHn/exec", {
            method: "POST",
            body: formData,
        });
        
        setShowThanksModal(true);
        setName("");
        setPhone("");
    };
    
    return (
        <SectionForm>
            <TextContainer>
                <h2>Ще <span>не маєте власного</span> житла?</h2>
                <h3>Допоможемо підбрати варіант <span>саме для вас</span></h3>
            </TextContainer>
            <form onSubmit={handleSubmit}>
                <FlexSpaceBetween style={{gap: '24px', marginBottom: '40px'}}>
                    <Input type="text" placeholder="Ім&#39;я" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input type="tel" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
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

    @media (max-width: 1439px) {
        flex-direction: column;
        padding: 100px 30px;
        gap: 60px;
    }

    @media (max-width: 743px) {
        padding: 60px 16px;
        gap: 32px;
    }
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

    @media (max-width: 743px) {
        gap: 16px;
        width: 288px;
        h2, h3 {
            font-size: 32px;
            width: 100%;
            text-align: center;
        }
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

    @media (max-width: 743px) {
        width: 100%;
    }
`;
