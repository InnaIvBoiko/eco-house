import styled from "styled-components";
import Header from "../../components/Header/Header";
import HeroCatalog from "../../components/Sections/HeroCatalog";
import FormHomePage from "../../components/Sections/FormHomePage";
import Donat from "../../components/Sections/Donat";

export default function CatalogPage() {
    return (
        <Container>
            <Header />
            <HeroCatalog />
            <FormHomePage />
            <Donat />
        </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;