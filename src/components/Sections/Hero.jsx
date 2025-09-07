
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/images/homePage/house.png");
  const [imgWidth, setImgWidth] = useState(window.innerWidth);
  const [imgHeight, setImgHeight] = useState(window.innerHeight);

  useEffect(() => {
    function updateImgSrc() {
      if (window.innerWidth <= 743) {
        setImgSrc("/images/homePage/house-mobile.png");
        setImgWidth("320");
        setImgHeight("409");
      } else if (window.innerWidth <= 1439) {
        setImgSrc("/images/homePage/house-tablet.png");
        setImgWidth("744");
        setImgHeight("496");
      } else {
        setImgSrc("/images/homePage/house.png");
        setImgWidth("1440");
        setImgHeight("768");
      }
    }
    updateImgSrc();
    window.addEventListener('resize', updateImgSrc);
    return () => window.removeEventListener('resize', updateImgSrc);
  }, []);

  return (
    <SectionHero>
      <h4>Оберіть житло майбутнього вже сьогодні</h4>
      <HeadWrapper>
        <h2>Еко</h2>
        <h1>гніздо</h1>
      </HeadWrapper>
      <Text>Сучасні квартири з продуманими плануваннями, зеленими зонами та сервісом для вашого комфорту.</Text>
      <HomeImage>
        <img src={imgSrc} alt="Еко гніздо" width={imgWidth} height={imgHeight} />
      </HomeImage>
      <List>
        <ListItem>Соціальне житло</ListItem>
        <ListItem>Комфорт</ListItem>
        <ListItem>Еко</ListItem>
        <ListItem>Мобільність</ListItem>
      </List>
    </SectionHero>
  );
}

const SectionHero = styled.section`
  position: relative;
  width: 1440px;
  height: 768px;
  background-image: url('/images/homePage/hero-section.jpg');
  background-size: cover;
  text-align: center;

  h4 {
    font-weight: 500;
    font-style: Medium;
    font-size: 48px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #000000;
    padding-top: 124px;
  }

  @media (max-width: 1439px) {
    width: 744px;
    height: 496px;
    padding: 16px;
    background-image: url('/images/homePage/hero-section-tablet.jpg');

    h4 {
      font-size: 24px;
      padding-top: 100px;
    }
  }

  @media (max-width: 743px) {
    width: 320px;
    height: 409px;
    background-image: url('/images/homePage/hero-section-mobile.jpg');

    h4 {
      font-size: 16px;
      padding-top: 74px;
    }
  }
`;

const HeadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    column-gap: 241px;
    width: 1156px; 
    margin-left: 260px;
    margin-top: -4px;

    h1 {
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 180px;
      leading-trim: NONE;
      line-height: 100%;
      letter-spacing: 0%;
      color: #000000;
      margin-left: auto;
      margin-top: -16px;
    }
      
    h2 {
      font-weight: 700;
      font-style: Bold;
      font-size: 200px;
      color: #006837;
    }

    @media (max-width: 1439px) {
      width: 628px;
      margin-left: 100px;
      margin-top: 0px;

    h1 {
      font-size: 90px;
      margin-top: 4px;
    }

    h2 {
        font-size: 90px;
      }

    }

    @media (max-width: 743px) {
      width: 254px;
      margin-left: 38px;
      margin-top: -12px;
      gap: 8px;
      flex-direction: row;

      h1 {
      font-size: 48px;
    }

      h2 {
        font-size: 48px;
        margin: 0;
      }
    }

`;

export const Text = styled.p`
  position: absolute;
  width: 445px;
  top: 235px;
  left: 960px;
  text-align: left;
  font-size: 24px;
  color: #333333;
  font-weight: 500;

  span {
    color: #006837;
  }

  @media (max-width: 1439px) {
    width: 220px;
    font-size: 16px;
    top: 156px;
    left: 524px;
  }

  @media (max-width: 743px) {
    display: none;
  }
`;

const HomeImage = styled.div`
  position: absolute;
  width: 1440px;
  height: 768px;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1439px) {
    width: 744px;
    height: 496px;
    top: 0px;
  }
  @media (max-width: 743px) {
    width: 320px;
    height: 409px;
  }

`;

const List = styled.ul`
  position: absolute;
  top: 455px;
  left: 24px;
  width: 220px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  z-index: 2;

  @media (max-width: 1439px) {
    width: 212px;
    top: 295px;
  }

  @media (max-width: 743px) {
    width: 112px;
    top: 292px;
    left: 16px;
    gap: 8px;
    justify-content: space-between;

    li:first-child {
      width: 112px;
      padding: 8px 4px;
    }

    li:last-child {
      width: 112px;
    }
  }
`;

export const ListItem = styled.li`
  border-radius: 10px;
  padding: 8px;
  backdrop-filter: blur(20px);
  background: rgba(251, 254, 251, 0.4);
  font-weight: 500;
  font-size: 24px;
  color: #000;

  @media (max-width: 1439px) {
    font-size: 20px;
  }

  @media (max-width: 743px) {
    font-size: 12px;
    padding: 8px 7px;
  }
`;
