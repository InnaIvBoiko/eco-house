import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Form } from "react-router-dom";
import FormHousePage from "../../components/Sections/FormHousePage";
import Footer from "../../components/Footer/Footer";
import HeroDream from "../../components/Sections/HeroDream";
import WhyImportant from "../../components/Sections/WhyImportant";
import DreamsMiniCatalog from "../../components/Sections/DreamsMiniCatalog";

export default function ModularDreamPage() {
    return (
        <Container>
            <Header />
            <div style={{ height: '100px', width: '1440px' }}></div>
            <HeroDream />
            <WhyImportant />
            <DreamsMiniCatalog />
            <FormHousePage />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
`;
