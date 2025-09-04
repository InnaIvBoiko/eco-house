import styled from "styled-components";
import Header from "../../components/Header/Header";
import Donat from "../../components/Sections/Donat";
import Footer from "../../components/Footer/Footer";

export default function ContactsPage() {
    return (
        <Container>
            <Header />
            <div style={{ height: "30vh" }}>
            </div>
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