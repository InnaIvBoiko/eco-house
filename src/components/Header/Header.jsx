import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { range } from '../../utils/breakpoints';
import PrimaryBtnIcon from '../Icons/IconPrimaryBtn';
import SecondaryBtnIcon from '../Icons/IconSecondaryBtn';
import PrimaryBtnIconMobile from '../Icons/IconPrimaryBtnMobile';
import SecondaryBtnIconMobile from '../Icons/IconSecondaryBtnMobile';
import MenuModal from '../Modal/MenuModal';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderBox>
      <Container>
        <HeaderLogo onClick={() => navigate('/')}>
          <SvgWrapper>
            <svg style={{ width: 63, height: 60 }}>
              <use style={{ transform: 'scale(0.5)' }} href="/logo.svg"></use>
            </svg>
          </SvgWrapper>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavItem>
              <StyledNavLink to={`/`}>Про нас</StyledNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <StyledNavLink to={`/catalog`}>Каталог будинків</StyledNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <StyledNavLink to={`/modular-dream`}>Модульна мрія</StyledNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <StyledNavLink to={`/contacts`}>Контакти</StyledNavLink>
            </HeaderNavItem>
          </HeaderNavList>
        </HeaderNav>
        <HeaderBurgerMenu onClick={() => setIsMenuOpen(true)}>
          <SvgWrapper>
            <svg style={{ width: '90px', height: '40px' }}>
              <use href="/BurgerMenu.svg"></use>
            </svg>
          </SvgWrapper>
        </HeaderBurgerMenu>
        <HeaderBtnWrapper>
          <BtnPrimary type="button" style={{ width: '236px' }} onClick={() => navigate('/catalog')}>
            Обрати дім
          </BtnPrimary>
          <BtnSecondary data-track="contact_request"
 type="button" onClick={()=> navigate('/contacts')}>Залишити заявку</BtnSecondary>
        </HeaderBtnWrapper>
        <HeaderBtnIconWrapper>
          <SvgBtnWrapper onClick={() => navigate('/catalog')}>
            <StyledPrimaryIcon />
          </SvgBtnWrapper>
          <SvgBtnWrapper data-track="contact_request"
 onClick={() => navigate('/contacts')}>
            <SecondaryBtnIcon />
          </SvgBtnWrapper>
        </HeaderBtnIconWrapper>
        <HeaderBtnIconWrapperMobile>
          <SvgBtnWrapper onClick={() => navigate('/catalog')}>
            <PrimaryBtnIconMobile />
          </SvgBtnWrapper>
          <SvgBtnWrapper data-track="contact_request"
 onClick={() => navigate('/contacts')}>
            <SecondaryBtnIconMobile />
          </SvgBtnWrapper>
        </HeaderBtnIconWrapperMobile>
      </Container>
      {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
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
  width: 100%;
  background-color: transparent;

  @media (max-width: 1439px) {
    max-width: 744px;
  }

  @media (max-width: 743px) {
    max-width: 320px;
    height: 80px;
  }
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

  @media (max-width: 1439px) {
    width: 744px;
    padding: 20px 24px 20px 24px;
  }

  @media (max-width: 743px) {
    width: 320px;
    padding: 20px 16px 20px 16px;
  }

`;

const HeaderLogo = styled.div`
  width: 63px;
  height: 60px;
  cursor: pointer;
`;

const SvgWrapper = styled.div`
  display: flex;
  width: 62px;
  height: 60px;
  justify-content: center;
  align-items: center;
  Object-
`;

const HeaderNav = styled.nav`
  display: none;

  @media only screen and ${range.fromDesktop} {
    display: initial;
    display: flex;
    flex-wrap: wrap;
    height: 32px;
  }
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

const HeaderBurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and ${range.mobileToTablet} {
    display: flex;
    justify-content: center;
    align-item: center;
    transform: scaleX(0.75);
  }

  @media only screen and ${range.tabletToDesktop} {
    display: flex;
    width: 40px;
  }
`;

const HeaderBtnWrapper = styled.div`
  display: none;
  @media only screen and ${range.fromDesktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 472px;
  }
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

const HeaderBtnIconWrapper = styled.div`
  width: 96px;
  height: 40px;
  gap: 16px;
  @media only screen and ${range.mobileToTablet} {
    display: none;
  }

  @media only screen and ${range.tabletToDesktop} {
    display: flex;
    justify-content: center;
    align-item: center;
    gap: 24px;
    display: flex;
    width: 144px;
    height: 61px;
  }

  @media only screen and ${range.fromDesktop} {
    display: none;
  }
`;
const SvgBtnWrapper = styled.div`

  cursor: pointer;
   &:hover {
    stroke: #25a02a;
  }
  &:active {
    stroke: #25a02a;
  }
  &:disabled {
    stroke: #7a7a7a;
  }
  @media only screen and ${range.tabletToDesktop} {
    display: flex;
 
`;

const StyledPrimaryIcon = styled(PrimaryBtnIcon)`
  width: 40px;
  height: 40px;

  // @media only screen and ${range.tabletToDesktop} {
  //   width: 60px;
  //   height: 60px;
  // }
`;

const HeaderBtnIconWrapperMobile = styled(HeaderBtnIconWrapper)`
  width: 96px;
  height: 40px;
  gap: 16px;
  @media only screen and ${range.mobileToTablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    display: flex;
    width: 96px;
    height: 40px;
  }

  @media only screen and ${range.tabletToDesktop} {
    display: none;
  }

  @media only screen and ${range.fromDesktop} {
    display: none;
  }
`;
