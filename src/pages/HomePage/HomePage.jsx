import styled from "styled-components";
import Hero from "../../components/Sections/Hero";

export default function HomePage() {
    return (
        <Container>
            <Hero />
        </Container>
    )
}

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
