import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Hero from '../../components/Sections/Hero';
import Advantages from '../../components/Sections/Advantages';

export default function HomePage() {
  return (
    <Container>
      <div>
        <Header />
      </div>
      <Hero />
      <Advantages />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
