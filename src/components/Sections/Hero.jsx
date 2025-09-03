import styled from 'styled-components';

export default function Hero() {
  return (
    <SectionHero>
      <h4>Оберіть житло майбутнього вже сьогодні</h4>
      <h1><span>Еко</span> <br /> гніздо</h1>
      <Text>Сучасні квартири з продуманими плануваннями, зеленими зонами та сервісом для вашого комфорту.</Text>
      <HomeImage>
        <img src="/images/house.png" alt="" />
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
  background-image: url('/images/hero-section.jpg');
  background-size: cover;
  text-align: center;

  h1 {
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 180px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #000000;
    display: flex;
    gap: 241px;
    margin-left: 260px;
    margin-top: 16px;

    span {
        font-weight: 700;
        font-style: Bold;
        font-size: 200px;
        color: #006837;
        }
    }

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
`;

const HomeImage = styled.div`
  position: absolute;
  width: 1440px;
  height: 768px;
  top: 0;
  left: 0;
  border-radius: 12px;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
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
`;

const ListItem = styled.li`
  border-radius: 10px;
  padding: 8px;
  backdrop-filter: blur(20px);
  background: rgba(251, 254, 251, 0.4);
  font-weight: 500;
  font-size: 24px;
  color: #000;
`;
