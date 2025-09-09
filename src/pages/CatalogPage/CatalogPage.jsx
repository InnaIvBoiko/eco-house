import { useEffect } from 'react';
import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import HeroCatalog from "../../components/Sections/HeroCatalog";
import FormHomePage from "../../components/Sections/FormHomePage";
import Donat from "../../components/Sections/Donat";
import Footer from "../../components/Footer/Footer";
import FuturesBuildings from "../../components/Sections/FuturesBuildings";
import InteriorsCatalog from "../../components/Sections/InteriorsCatalog";
import ThanksModal from "../../components/Modal/ThanksModal";

export default function CatalogPage() {
    const [showThanksModal, setShowThanksModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <Header />
            <HeroCatalog />
            <FuturesBuildings />
            <InteriorsCatalog />
            <FormHomePage setShowThanksModal={setShowThanksModal} />
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

    @media (max-width: 743px) {
        max-width: 320px;
    }
`;