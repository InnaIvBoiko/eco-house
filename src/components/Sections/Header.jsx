import styled from 'styled-components';
// import Header from '../../components/Sections/Header';git
export default function Header() {
  return (
    <HeaderBox>
      <Container>
        <HeaderLogo>
          <a href="#" rel="noopener noreferer">
            <SvgWrapper>
              <svg>
                <use style={{ transform: 'scale(0.5)' }} href="../../../public/logo.svg"></use>
              </svg>
            </SvgWrapper>
          </a>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavItem>
              <a href="#" rel="noopener noreferer">
                Про нас
              </a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="#" rel="noopener noreferer">
                Каталог Будинків
              </a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="#" rel="noopener noreferer">
                Донати
              </a>
            </HeaderNavItem>
            <HeaderNavItem>
              <a href="#" rel="noopener noreferer">
                Контакти
              </a>
            </HeaderNavItem>
          </HeaderNavList>
        </HeaderNav>
        <HeaderBtnWrapper>
          <BtnChooseHouse>Обрати дім</BtnChooseHouse>
          <BtnMakeOrder>Залишити заявку</BtnMakeOrder>
        </HeaderBtnWrapper>
      </Container>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
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
  padding: 20px 24px 20px 39px;
  justify-content: space-between;
  align-items: center;

  a {
    color: #000;
  }
`;

const HeaderLogo = styled.div`
  width: 63px;
  height: 60px;
`;

const SvgWrapper = styled.div`
  width: 62px;
  height: 60px;
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 543px;
  height: 32px;
`;

const HeaderNavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 16px;
  justify-content: space-between;
`;

const HeaderNavItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 4px 10px;
  align-items: center;
  color: #000;
`;

const HeaderBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 472px;
`;

const BtnChooseHouse = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  width: 236px;
  height: 60px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #25a02a;
  &:hover {
    background: #0d6511;
  }
  &:active {
    background: #25a02a;
  }
  &:disabled {
    background: #7a7a7a;
  }
`;

const BtnMakeOrder = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #25a02a;
  border-radius: 5px;
  width: 212px;
  height: 60px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  &:hover {
    border-color: #0d6511;
  }
  &:active {
    border-color: #25a02a;
  }
  &:disabled {
    border-color: #7a7a7a;
  }
`;
