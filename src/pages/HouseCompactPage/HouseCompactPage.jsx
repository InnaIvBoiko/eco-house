import styled from "styled-components";
import Header from "../../components/Header/Header";
import HouseHero from "../../components/Sections/HouseHero";
import FormHousePage from "../../components/Sections/FormHousePage";
import Donat from "../../components/Sections/Donat";
import Footer from "../../components/Footer/Footer";

export default function HauseCompactPage() {
    return (
        <Container>
            <Header />
            <div style={{ height: "10vh" }}>
            </div>
            <HouseHero/>
            <FormHousePage />
            <Donat />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
`;