import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Form } from "react-router-dom";
import FormHousePage from "../../components/Sections/FormHousePage";
import Footer from "../../components/Footer/Footer";

export default function ModularDreamPage() {
    return (
        <Container>
            <Header />
            <div style={{ height: '100px', width: '1440px' }}></div>
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
