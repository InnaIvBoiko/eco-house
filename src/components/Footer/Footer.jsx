import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { size, range } from '../../utils/breakpoints';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterBox>
      <Container>
        <FooteLogoAndNavWrapper>
          <FooterLogo onClick={() => navigate('/')}>
            <SvgWrapper>
              <svg style={{ width: 125, height: 120 }}>
                <use href="/logo.svg"></use>
              </svg>
            </SvgWrapper>
          </FooterLogo>
          <FooterLogoMobile onClick={() => navigate('/')}>
            <SvgWrapper>
              <svg style={{ width: 42, height: 40 }}>
                <use href="/footerLogoMobile.svg"></use>
              </svg>
            </SvgWrapper>
          </FooterLogoMobile>
          <FooterNav>
            <FooterNavList>
              <FooterNavItem onClick={() => navigate('/')}>Про нас</FooterNavItem>
              <FooterNavItem onClick={() => navigate('/catalog')}>Каталог будинків</FooterNavItem>
              <FooterNavItem onClick={() => navigate('/modular-dream')}>Модульна мрія</FooterNavItem>
              <FooterNavItem onClick={() => navigate('/contacts')}>Контакти</FooterNavItem>
            </FooterNavList>
            <FooterPhoneNumberInNav>+38 (098) 000-00-00</FooterPhoneNumberInNav>
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
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin: 0 auto;
  max-width: 1440px;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and ${range.fromDesktop} {
    flex-direction: row;
    align-items: initial;
    justify-content: initial;
  }
`;

const Container = styled.div`
  a {
    color: #000;
  }
  padding: 16px;

  display: none;
  @media only screen and ${range.mobileToTablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and ${range.tabletToDesktop} {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 1439.98px;
    padding: 24px;
    justify-content: space-between;
  }

  @media only screen and ${range.fromDesktop} {
    display: flex;
    flex-wrap: wrap;
    width: 1440px;
    padding: 24px;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const FooteLogoAndNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media only screen and ${range.fromDesktop} {
    display: flex;
    flex-direction: row;
  }
`;

const FooterLogo = styled.div`
  width: 125px;
  height: 120px;
  cursor: pointer;
  @media only screen and ${range.mobileToTablet} {
    display: none;
  }
`;

const FooterLogoMobile = styled(FooterLogo)`
  width: 42px;
  height: 40px;
  margin-bottom: 24px;

  @media only screen and ${range.mobileToTablet} {
    display: flex;
  }

  @media only screen and ${range.tabletToDesktop} {
    display: none;
  }
  @media only screen and ${range.fromDesktop} {
    display: none;
  }
`;

const SvgWrapper = styled.div`
  width: 62px;
  height: 60px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  align-items: center;
  gap: 12px;
  @media only screen and ${range.mobileToTablet} {
    margin-left: 0;
  }

  @media only screen and ${range.tabletToDesktop} {
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-left: 0;
  }
`;

const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  gap: 6px;

  @media only screen and ${range.mobileToTablet} {
    margin-left: 0;
  }

  @media only screen and ${range.tabletToDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }
  @media only screen and ${range.fromDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }
`;

const FooterNavItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 4px 10px;
  align-items: center;
  color: #000;
  cursor: pointer;
  font-size: 16px;

  @media only screen and ${range.tabletToDesktop} {
    font-size: 20px;
  }
`;

const FooterSocialsWrapper = styled.div`
  width: 132px;
  height: 28px;
  margin-right: 0;

  @media only screen and ${range.fromDesktop} {
    margin-right: 82px;
  }
`;

const FooterSocialsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media only screen and ${range.fromDesktop} {
    margin-left: 20px;
  }
`;
const FooterSocialsItem = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const FooterPhoneNumber = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #000;
  @media only screen and ${range.mobileToTablet} {
    display: none;
  }

  @media only screen and ${range.tabletToDesktop} {
    display: none;

    justify-content: center;
    align-items: center;
  }
`;

const FooterCopyRigths = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #000;
  margin: 0 auto;
  padding-bottom: 24px;
  padding-top: 8px;
  @media only screen and ${range.mobileToTablet} {
    font-size: 14px;
  }
`;

const FooterPhoneNumberInNav = styled(FooterPhoneNumber)`
  display: none;
  @media only screen and ${range.mobileToTablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  @media only screen and ${range.tabletToDesktop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and ${range.fromDesktop} {
    display: none;
  }
`;
