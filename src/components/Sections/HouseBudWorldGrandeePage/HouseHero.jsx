import styled from 'styled-components';
import IconHousePage1 from '../../Icons/IconsHousePage/IconHousePage1';
import IconHousePage2 from '../../Icons/IconsHousePage/IconHousePage2';
import IconHousePage3 from '../../Icons/IconsHousePage/IconHousePage3';
import IconHousePage4 from '../../Icons/IconsHousePage/IconHousePage4';


export default function HouseHero() {
    return (
        <SectionHeroHouse>
            
        <h1>
          <span>Буд</span>Світ Гранд
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
  background-image: url('/images/houseBudWorldGrandeePage/house.jpg');
  background-size: cover;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 100px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color:  #000000;
    text-align: center;
    padding-top: 16px;
    padding-left: 120px;

    span {
      font-weight: 500;
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
    background-image: url('/images/houseBudWorldGrandeePage/house-tab.jpg');
    width: 744px;
    height: 666px;

     h1 {
      font-weight: 600;
      font-size: 64px;
      padding-top: 36px;
      padding-left: 0;

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
    background-image: url('/images/houseBudWorldGrandeePage/house-mob.jpg');

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
    top: 70px;
    left: 228px;
    width: 209px;
    
  }
  &:nth-child(2) {
    position: relative;
    top: 224px;
    left: 848px;
    width: 205px;
  }
  &:nth-child(3) {
    position: relative;
    top: 18px;
    left: 990px;
    width: 257px;
  }
  &:nth-child(4) {
    position: relative;
    top: 148px;
    left: 440px;
    width: 260px;
  }

 @media (max-width: 1439px) {
    font-size: 16px;

    &:nth-child(1) {
      top: 28px;
        left: 20px;
    }
    &:nth-child(2){
      top: 122px;
      left: 496px;
    }
    &:nth-child(3){
      top: -104px;
      left: 396px;
    }
    &:nth-child(4) {
      top: 118px;
      left: 260px;
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
      left: 14px;
    }
    &:nth-child(2){
      width: 127px;
      height: 57px;
      top: 50px;
      left: 186px;
    }
    &:nth-child(3){
      width: 150px;
      height: 68px;
      top: -112px;
      left: 150px;
    }
    &:nth-child(4) {
      width: 124px;
      height: 72px;
      top: -12px;
      left: 20px;
    }
     }
  }
`;

const SvgWrapper = styled.div`
  width: 50px;
  height: 50px;

  svg {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 743px){
    width: 30px;
    height: 30px;
    
    svg {
      width: 30px;
      height: 30px;
    }
  }

`;