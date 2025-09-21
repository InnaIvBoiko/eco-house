import styled from 'styled-components';
import IconHousePage5 from '../../Icons/IconsHousePage/IconHousePage5';
import IconHousePage6 from '../../Icons/IconsHousePage/IconHousePage6';
import IconHousePage7 from '../../Icons/IconsHousePage/IconHousePage7';
import IconHousePage8 from '../../Icons/IconsHousePage/IconHousePage8';

export default function HouseInfo() {
  return (
    <SectionHouseInfo>
      <InfoPage>
        <List>
           <ListItem><ContentWrapper><IconHousePage5/>85 м²</ContentWrapper>Площа</ListItem>
           <ListItem><ContentWrapper><IconHousePage6/>2</ContentWrapper>Кімнати</ListItem>
           <ListItem><ContentWrapper><IconHousePage7/>2</ContentWrapper>Санвузли</ListItem>
           <ListItem><ContentWrapper><IconHousePage8 />А++</ContentWrapper>Клас</ListItem>     
        </List>
        <TextPrice>982 000 грн</TextPrice>
      </InfoPage>
      <HomePageInfo>
              <Text> <span>ЕкоГніздо Преміум</span> — це затишний і функціональний модульний будинок, створений для тих, хто цінує комфорт у мінімалістичному форматі. Площа 85 м² ідеально підходить для однієї людини чи пари, забезпечуючи все необхідне для щоденного життя.
                  <ul>
                      <li>Раціональне планування: простора кімната з можливістю облаштувати спальню та робочу зону.</li>
                      <li>Затишна спальня: комфорт для відпочинку й відновлення.</li>
                      <li>Енергоефективність класу A++: до 50% економії на опаленні та охолодженні.</li>
                      <li>Екологічні матеріали: безпечні для здоров’я та навколишнього середовища.</li>
                      <li>Швидкий монтаж: встановлення будинку займає лише кілька днів.</li>
                  </ul>
                  
                  Ідеальний вибір для молодих сімей або як гостьовий будиночок на вашій ділянці.
              </Text>
      </HomePageInfo>
    </SectionHouseInfo>
  );
}

const SectionHouseInfo = styled.section`
  width: 1440px;
  background-color: inherit;
 


  @media (max-width: 1439px) {
    width: 744px;
 
  }
  @media (max-width: 743px){
  width: 320px;
  }
`;
const InfoPage = styled.div`
  padding: 64px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1439px) {
  display: block;
  padding: 46px 9px 30px 9px;
  
  }
  @media (max-width: 743px){
  padding: 24px 26px 35px 26px;
  }
 
`

 const Text = styled.div`
 font-weight: 500;
font-size: 24px;
color: #333;
padding: 0 24px;
span {
color: #006837;
}
ul{
padding: 25px 24px;
list-style-type: inherit;
}

@media (max-width: 743px) {
font-weight: 500;
font-size: 18px;
padding: 0 16px;
}
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap:64px;

  @media (max-width: 1439px) {
  gap: 54px;
  margin-bottom: 46px;
  }
  @media (max-width: 743px){
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 24px;
  
  }
`;

 const ListItem = styled.li`

font-weight: 400;
font-size: 36px;
color: #333;

@media (max-width: 1439px) {
font-weight: 400;
font-size: 32px;
}

@media (max-width: 743px){

font-weight: 400;
font-size: 24px;
width: calc((100% - 40px) / 2);

}
  
`;
const ContentWrapper = styled.div`
font-weight: 500;
font-size: 36px;
color: #000;
height: 50px;
display: flex;
align-items: center;
justify-content: start;
flex-direction: row;
gap: 16px;
margin-bottom: 4px;


@media (max-width: 1439px) {
font-weight: 500;
font-size: 36px;
}

@media (max-width: 743px) {
font-weight: 500;
font-size: 24px;

}
`

const HomePageInfo = styled.div`
display: flex;
`

const TextPrice = styled.p`
font-weight: 600;
font-size: 64px;
letter-spacing: -0.02em;
color: #000;
font-family: "Inter", sans-serif;


@media (max-width: 1439px) {
font-weight: 600;
font-size: 48px;
text-align: right;

padding-right: 17px;
}

@media (max-width: 743px) {
font-weight: 600;
font-size: 24px;
padding-right: 0px;
}
`