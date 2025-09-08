import styled from "styled-components";
import Header from "../../components/Header/Header";
import NotFound from "../../components/Sections/NotFound";

export default function NotFoundPage() {
    return (
        <Container>
            <Header />
            <NotFound />
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