import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import HouseHero from "../../components/Sections/HouseHarmonyPage/HouseHero";
import HouseInfo from "../../components/Sections/HouseHarmonyPage/HouseInfo";
import HousePlan from "../../components/Sections/HouseHarmonyPage/HousePlan";
import FormHousePage from "../../components/Sections/FormHousePage";
import Donat from "../../components/Sections/Donat";
import Footer from "../../components/Footer/Footer";
import ThanksModal from "../../components/Modal/ThanksModal";

export default function HouseHarmonyPage() {
    const [showThanksModal, setShowThanksModal] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);    
  
    return (
        <Container>
            <Header />
            <HeaderBg></HeaderBg>
            <HouseHero />
            <HouseInfo />
            <HousePlan />
            <FormHousePage />
            <Donat />
            <Footer />
            {showThanksModal && <ThanksModal onClose={() => setShowThanksModal(false)} />}
        </Container>
    );
}

const Container = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;

    @media (max-width: 1439px) {
        max-width: 744px;
    }
    @media (max-width: 767px) {
        max-width: 320px;
    }
`;

export const HeaderBg = styled.div`
    height: 100px;

    @media (max-width: 743px) {
        height: 80px;
    } 
`;