import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import HouseHero from "../../components/Sections/HouseHero";
import HouseInfo from '../../components/Sections/HouseInfo'
import HousePlan  from "../../components/Sections/HousePlan";
import FormHousePage from "../../components/Sections/FormHousePage";
import Donat from "../../components/Sections/Donat";
import Footer from "../../components/Footer/Footer";
import ThanksModal from "../../components/Modal/ThanksModal";

export default function HouseCompactPage() {
    const [showThanksModal, setShowThanksModal] = useState(false);
    return (
        <Container>
            <Header />
            <div style={{ height: "100px" }}>
            </div>
            <HouseHero />
            <HouseInfo />
            <HousePlan/>
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

    @media (max-width: 1439px) {
    max-width: 744px;
  }
  @media (max-width: 767px) {
    max-width: 320px;
  }
`;