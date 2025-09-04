import { NavLink, useNavigate  } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <Container>
        <HeaderLogo onClick={() => navigate('/')}>
            <SvgWrapper >
              <svg style={{ width: 63, height: 60}}>
                <use style={{ transform: 'scale(0.5)' }} href="/logo.svg"></use>
              </svg>
            </SvgWrapper>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavItem>
              <StyledNavLink to={`/`}>
                Про нас
              </StyledNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <StyledNavLink to={`/catalog`}>
                Каталог будинків
              </StyledNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <StyledNavLink to={`/donate`}>
                Донати
              </StyledNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <StyledNavLink to={`/contacts`}>
                Контакти
              </StyledNavLink>
            </HeaderNavItem>
          </HeaderNavList>
        </HeaderNav>
        
        <HeaderBtnWrapper>
          <BtnPrimary type="button" style={{width: '236px'}}>Обрати дім</BtnPrimary>
          <BtnSecondary type="button">Залишити заявку</BtnSecondary>
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
  cursor: pointer;
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

export const BtnPrimary = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #fff;
  border-radius: 5px;
  height: 60px;
  padding: 20px 24px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #0d6511;
  
  &:hover {
    background: #25a02a;
  }
  &:active {
    background: #25a02a;
  }
  &:disabled {
    background: #7a7a7a;
  }
`;

export const BtnSecondary = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #0d6511;
  border-radius: 5px;
  height: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #000;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  padding: 20px 24px;

  &:hover {
    border-color: #25a02a;
  }
  &:active {
    border-color: #25a02a;
  }
  &:disabled {
    border-color: #7a7a7a;
  }
`;


const StyledNavLink = styled(NavLink)`
    font-weight: 500;
    font-size: 20px;
    text-wrap: nowrap;
    color: #000;

    &.active {
        color: #006837;
    }
`;