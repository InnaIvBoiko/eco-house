import styled from 'styled-components';
import IconHousePage1 from '../Icons/IconHousePage1';
import IconHousePage2 from '../Icons/IconHousePage2';
import IconHousePage3 from '../Icons/IconHousePage3';
import IconHousePage4 from '../Icons/IconHousePage4';


export default function HouseHero() {
    return (
        <SectionHeroHouse>
            
            <h1>
                <span>Еко</span>Гніздо Компакт
            </h1>
            {/* <Text>Сучасні квартири з продуманими плануваннями, зеленими зонами та сервісом для вашого комфорту.</Text> */}
            <HouseImage>
                <img src="" alt="" />
            </HouseImage>
            <List>
                <ListItemHouse> <IconHousePage1/> <p>
                  <h4>Дах</h4>натуральні матеріали
                </p></ListItemHouse>
                <ListItemHouse> <IconHousePage2/> <p>
                  <h4>Стіни</h4>екологічні SIP-панелі
                </p></ListItemHouse>
                <ListItemHouse> <IconHousePage3/> <p>
                  <h4>Вікна</h4>енергоефективні склопакети
                </p></ListItemHouse>
                <ListItemHouse><IconHousePage4/> <p>
                  <h4>Двері</h4>із захистом від втрати тепла
                </p></ListItemHouse>
            </List>
        </SectionHeroHouse>
    );
}
const SectionHeroHouse = styled.section`
  position: relative;
  width: 1440px;
  height: 768px;
  background-image: url('/images/housePage/house.jpg');
  background-size: cover;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 128px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color:  #333;
    text-align: center;
   
    
  

    span {
      font-weight: 600;
      font-size: 128px;
      color: #006837;
    }
  }

  h4 {
   font-weight: 500;
   font-size: 24px;
   color: #000;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #000000;
   
  }
    p {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #333;
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

const HouseImage = styled.div`
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
  width: 220px;
  height: 83px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  
`;


export const ListItemHouse = styled.li`
  border-radius: 10px;
  height: 83px;
  padding: 8px 24px;
  backdrop-filter: blur(3px);
  background: rgba(251, 254, 251, 0.4);
  font-weight: 500;
  font-size: 24px;
  color: #333;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: center;

 
&:nth-child(1) {
    position: relative;
    top: 83px;
    left: 550px;
    width: 209px;
  }
  &:nth-child(2) {
  position: relative;
    top: 18px;
    left: 875px;
  }
  &:nth-child(3) {
  position: relative;
    top: 62px;
    left: 972px;
  }
  &:nth-child(4) {
  position: relative;
    top: 100px;
    left: 700px;
    width: 260px;
  }
 
`;
