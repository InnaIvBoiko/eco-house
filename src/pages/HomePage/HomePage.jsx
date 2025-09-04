import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Hero from '../../components/Sections/Hero';
import Advantages from '../../components/Sections/Advantages';
import MiniCatalog from '../../components/Sections/MiniCatalog';
import Donat from '../../components/Sections/Donat';
import FormHomePage from '../../components/Sections/FormHomePage';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  return (
    <Container>
      <div>
        <Header />
      </div>
      <Hero />
      <Advantages />
      <MiniCatalog />
      <Donat />
      <FormHomePage />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
