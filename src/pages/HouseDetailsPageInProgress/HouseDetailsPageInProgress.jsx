import { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import FormHousePage from "../../components/Sections/FormHousePage";
import Donat from "../../components/Sections/Donat";
import Footer from "../../components/Footer/Footer";
import IconHousePage9 from "../../components/Icons/IconsHousePage/IconHousePage9";

export default function HouseDetailsPageInProgress() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <Container>
            <Header />
            <div style={{ height: "100px" }}></div>
            <Title><IconHousePage9 /> Деталі будинку в процесі розробки...</Title>
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

    @media (max-width: 1439px) {
        max-width: 744px;
    }
    @media (max-width: 767px) {
        max-width: 320px;
  }
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 64px;
    text-align: center;
    color: #006837;
    margin: 0 auto;
    padding: 200px 24px 100px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;

    @media (max-width: 1439px) {
        font-size: 48px;
        padding: 100px 24px 60px 24px;
        gap: 16px;
        flex-direction: column;
    }

    @media (max-width: 743px) {
        font-size: 24px;
        padding: 60px 16px 24px 16px;
        gap: 8px;
    }
`;