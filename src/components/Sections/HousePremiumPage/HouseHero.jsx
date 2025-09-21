import styled from 'styled-components';
import IconHousePage1 from '../../Icons/IconsHousePage/IconHousePage1';
import IconHousePage2 from '../../Icons/IconsHousePage/IconHousePage2';
import IconHousePage3 from '../../Icons/IconsHousePage/IconHousePage3';
import IconHousePage4 from '../../Icons/IconsHousePage/IconHousePage4';


export default function HouseHero() {
    return (
        <SectionHeroHouse>
            
        <h1>
          <span>Еко</span>Гніздо Преміум
        </h1>
            <List>
                <ListItemHouse><SvgWrapper><IconHousePage1 /></SvgWrapper>
                  <div>
                    <h4>Дах</h4><p>натуральні матеріали</p>
                  </div>
                </ListItemHouse>
                <ListItemHouse> <SvgWrapper><IconHousePage2/></SvgWrapper>
                  <div>
                    <h4>Стіни</h4><p>екологічні SIP-панелі</p>
                  </div>
                 </ListItemHouse>
                <ListItemHouse> <SvgWrapper><IconHousePage3/></SvgWrapper>
                   <div>
                     <h4>Вікна</h4><p>енергоефективні склопакети</p>
                   </div>
                </ListItemHouse>
                <ListItemHouse><SvgWrapper><IconHousePage4/></SvgWrapper>
                   <div>
                     <h4>Двері</h4> <p>із захистом від втрати тепла</p>
                    </div>
               </ListItemHouse>
            </List>
        </SectionHeroHouse>
    );
}
const SectionHeroHouse = styled.section`
  position: relative;
  width: 1440px;
  height: 666px;
  background-image: url('/images/housePremiumPage/house.jpg');
  background-size: cover;


  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 100px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color:  #333;
    text-align: center;
    padding-top: 12px;

    span {
      font-weight: 600;
      font-size: 100px;
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

    @media (max-width: 1439px) {
    background-image: url('/images/housePremiumPage/house-tab.jpg');
    width: 744px;
    height: 666px;

     h1 {
      font-weight: 600;
      font-size: 64px;
      padding-top: 36px;
    

    span {
      font-weight: 600;
      font-size: 64px;
    }
  }
    h4 {
    font-weight: 500;
    font-size: 24px;}
  }
  
  @media (max-width: 743px){
    width: 320px;
    height: 350px;
    background-image: url('/images/housePremiumPage/house-mob.jpg');

    h1 {
    font-weight: 600;
    font-size: 32px;
    padding-top: 20px;
    

    span {
      font-weight: 600;
      font-size: 32px;
    }
}
  h4 {
    font-weight: 500;
    font-size: 18px;
  }
    p{
    font-weight: 500;
    font-size: 12px;
    }

    }
`;




const List = styled.ul`
  position: absolute;
  max-width: 260px;
  height: 83px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 743px) {
  max-width: 150px;

  max-height: 72px;
  }
`;


const ListItemHouse = styled.li`
  border-radius: 10px;
  height: 83px;
  padding: 8px 24px;
  backdrop-filter: blur(3px);
  background: rgba(251, 254, 251, 0.4);
  font-weight: 500;
  color: #333;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: center;
 
&:nth-child(1) {
    position: relative;
    top: 48px;
    left: 406px;
    width: 209px;
    
  }
  &:nth-child(2) {
    position: relative;
    top: 0;
    left: 1054px;
    width: 205px;
  }
  &:nth-child(3) {
    position: relative;
    top: 100px;
    left: 772px;
    width: 257px;
  }
  &:nth-child(4) {
    position: relative;
    top: 100px;
    left: 70px;
    width: 260px;
  }

 @media (max-width: 1439px) {
    font-size: 16px;

    &:nth-child(1) {
    top: 152px;
    left: 110px;
    }
    &:nth-child(2){
    top: 102px;
    left: 460px;
    }
    &:nth-child(3){
    top: 108px;
    left: 424px;
    }
    &:nth-child(4) {
    top: 42px;
    left: 42px;
    }

    }

  @media (max-width: 743px){

  height: 72px;
  padding: 2px 4.5px;
  gap: 12px;
  &:nth-child(1) {
    width: 116px;
    height: 56px;
    top: 20px;
    left: 7px;
    }
    &:nth-child(2){
    width: 127px;
    height: 57px;
    top: -57px;
    left: 166px;
    }
    &:nth-child(3){
    width: 150px;
    height: 68px;
    top: -40px;
    left: 159px;
    }
    &:nth-child(4) {
    width: 124px;
    height: 72px;
    top: -60px;
    left: 28px;
    }
     }
  }
`;

const SvgWrapper = styled.div`
  width: 50px;
  height: 50px;

  @media (max-width: 743px){
    width: 30px;
    height: 30px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;