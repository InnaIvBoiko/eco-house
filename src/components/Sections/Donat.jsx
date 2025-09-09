import { useState } from "react";
import styled from "styled-components";
import DonationModal from "../Modal/DonationModal";

export default function Donat() {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    return (
        <Section>
            <h2>Підтримай нашу ініціативу – <span>допоможи сім’ям отримати</span> своє <span>Еко</span>Гніздо</h2>
            <DonatButton type="button" onClick={() => setIsDonationModalOpen(true)}>Зробити внесок</DonatButton>
            {isDonationModalOpen && <DonationModal onClose={() => setIsDonationModalOpen(false)} />}
        </Section>
    );
}

const Section = styled.section`
    width: 1440px;
    height: 529px;  
    background-image: url('/images/homePage/donat-bg.jpg');
    background-size: cover;
    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin: 0 auto;

    h2 {
        font-weight: 600;
        font-size: 64px;
        text-align: center;
        color: #000;
    }

    span {
        color: #006837;
    }

    @media (max-width: 1439px) {
        width: 744px;
        height: 467px;
        background-image: url('/images/homePage/donat-tablet.jpg');
        gap: 24px;

        h2 {
            font-size: 40px;
        }
    }

    @media (max-width: 743px) {
        width: 320px;
        height: 342px;
        background-image: url('/images/homePage/donat-mobile.jpg');
        padding: 25px 16px;
        h2 {
            font-size: 24px;
        }
    } 
`;
const DonatButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 20px 24px;
    width: 446px;
    height: 60px;
    box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
    background: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #000;

    &:hover {
        background: #25a02a;
        color: #fff;
    }

    @media (max-width: 743px) {
        width: 208px;
    }
`;
