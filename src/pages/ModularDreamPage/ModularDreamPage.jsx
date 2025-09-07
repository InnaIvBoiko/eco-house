import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Form } from "react-router-dom";
import FormHousePage from "../../components/Sections/FormHousePage";
import Footer from "../../components/Footer/Footer";
import HeroDream from "../../components/Sections/HeroDream";
import WhyImportant from "../../components/Sections/WhyImportant";
import DreamsMiniCatalog from "../../components/Sections/DreamsMiniCatalog";
import ModulCity from "../../components/Sections/ModulCity";
import ThanksModal from "../../components/Modal/ThanksModal";

export default function ModularDreamPage() {
    const [showThanksModal, setShowThanksModal] = useState(false);
    
    return (
        <Container>
            <Header />
            <div style={{ height: '100px', width: '1440px' }}></div>
            <HeroDream />
            <WhyImportant />
            <DreamsMiniCatalog />
            <ModulCity />
            <FormHousePage setShowThanksModal={setShowThanksModal} />
            <Footer />
            {showThanksModal && <ThanksModal onClose={() => setShowThanksModal(false)} />}
        </Container>
    );
}

const Container = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
`;
