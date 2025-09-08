import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import { Form } from 'react-router-dom';
import FormHousePage from '../../components/Sections/FormHousePage';
import Footer from '../../components/Footer/Footer';
import HeroDream from '../../components/Sections/HeroDream';
import WhyImportant from '../../components/Sections/WhyImportant';
import DreamsMiniCatalog from '../../components/Sections/DreamsMiniCatalog';
import ModulCity from '../../components/Sections/ModulCity';
import ThanksModal from '../../components/Modal/ThanksModal';

export default function ModularDreamPage() {
  const [showThanksModal, setShowThanksModal] = useState(false);

  return (
    <Container>
      <Header />
      <div></div>
      <HeroDream />
      <WhyImportant />
      {/* <DreamsMiniCatalog /> */}
      <ModulCity />
      <FormHousePage setShowThanksModal={setShowThanksModal} />
      <Footer />
      {showThanksModal && <ThanksModal onClose={() => setShowThanksModal(false)} />}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  > div:first-of-type {
    width: 1440px;
    height: 100px;
  }
  @media (max-width: 1439.8px) {
    > div:first-of-type {
      width: 744px;
      height: 100px;
    }
    max-width: 744px;
  }
  @media (max-width: 743.8px) {
    > div:first-of-type {
      width: 320px;
      height: 100px;
    }
    max-width: 320px;
  }
`;
