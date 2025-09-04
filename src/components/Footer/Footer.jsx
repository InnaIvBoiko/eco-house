import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterBox>
      <Container>
        <FooteLogoAndNavWrapper>
          <FooterLogo>
            <a href="#" rel="noopener noreferer">
              <SvgWrapper>
                <svg style={{ width: 125, height: 120 }}>
                  <use href="/logo.svg"></use>
                </svg>
              </SvgWrapper>
            </a>
          </FooterLogo>
          <FooterNav>
            <FooterNavList>
              <FooterNavItem>
                <a href="#" rel="noopener noreferer">
                  Про нас
                </a>
              </FooterNavItem>
              <FooterNavItem>
                <a href="#" rel="noopener noreferer">
                  Каталог будинків
                </a>
              </FooterNavItem>
              <FooterNavItem>
                <a href="#" rel="noopener noreferer">
                  Донати
                </a>
              </FooterNavItem>
              <FooterNavItem>
                <a href="#" rel="noopener noreferer">
                  Контакти
                </a>
              </FooterNavItem>
            </FooterNavList>
            <FooterSocialsWrapper>
              <FooterSocialsList>
                <FooterSocialsItem>
                  <a href="#" rel="noopener noreferer">
                    <svg style={{ width: 28, height: 28 }}>
                      <use href="/facebook.svg"></use>
                    </svg>
                  </a>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <a href="#" rel="noopener noreferer">
                    <svg style={{ width: 28, height: 28 }}>
                      <use href="/instagram.svg"></use>
                    </svg>
                  </a>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <a href="#" rel="noopener noreferer">
                    <svg style={{ width: 28, height: 28 }}>
                      <use href="/youtube.svg"></use>
                    </svg>
                  </a>
                </FooterSocialsItem>
              </FooterSocialsList>
            </FooterSocialsWrapper>
          </FooterNav>
        </FooteLogoAndNavWrapper>
        <FooterPhoneNumber>+38 (098) 000-00-00</FooterPhoneNumber>
      </Container>
      <FooterCopyRigths>Копірайт: ©2025 ЕкоГніздо</FooterCopyRigths>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  z-index: 999;
  position: absolute;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1440px;
  background-color: transparent;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1440px;
  padding: 24px;
  justify-content: space-between;
  align-items: start;

  a {
    color: #000;
  }
`;

const FooteLogoAndNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterLogo = styled.div`
  width: 125px;
  height: 120px;
`;

const SvgWrapper = styled.div`
  width: 62px;
  height: 60px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 543px;
  margin-left: 300px;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const FooterNavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 16px;
  justify-content: space-between;
`;

const FooterNavItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 4px 10px;
  align-items: center;
  color: #000;
`;

const FooterSocialsWrapper = styled.div`
  width: 132px;
  height: 28px;
`;

const FooterSocialsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const FooterSocialsItem = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
const FooterSocialIcon = styled.svg``;

const FooterPhoneNumber = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #000;
`;

const FooterCopyRigths = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #000;
  margin: 0 auto;
  padding-bottom: 24px;
`;
