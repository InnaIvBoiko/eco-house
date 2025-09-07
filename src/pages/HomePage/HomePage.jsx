import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Hero from '../../components/Sections/Hero';
import Advantages from '../../components/Sections/Advantages';
import MiniCatalog from '../../components/Sections/MiniCatalog';
import Donat from '../../components/Sections/Donat';
import FormHomePage from '../../components/Sections/FormHomePage';
import Footer from '../../components/Footer/Footer';
import ThanksModal from '../../components/Modal/ThanksModal';

export default function HomePage() {
  const [showThanksModal, setShowThanksModal] = useState(false);

  return (
    <Container>
      <div>
        <Header />
      </div>
      <Hero />
      <Advantages />
      <MiniCatalog />
      <Donat />
      <FormHomePage setShowThanksModal={setShowThanksModal} />
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
