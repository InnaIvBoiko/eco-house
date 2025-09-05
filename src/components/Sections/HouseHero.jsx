import styled from 'styled-components';
import IconHousePage1 from '../Icons/IconsHousePage/IconHousePage1';
import IconHousePage2 from '../Icons/IconsHousePage/IconHousePage2';
import IconHousePage3 from '../Icons/IconsHousePage/IconHousePage3';
import IconHousePage4 from '../Icons/IconsHousePage/IconHousePage4';


export default function HouseHero() {
    return (
        <SectionHeroHouse>
            
            <h1>
                <span>Еко</span>Гніздо Компакт
        </h1>
            <List>
                <ListItemHouse> <IconHousePage1 />
                  <div>
                    <h4>Дах</h4><p>натуральні матеріали</p>
                  </div>
                </ListItemHouse>
                <ListItemHouse> <IconHousePage2/> 
                  <div>
                    <h4>Стіни</h4><p>екологічні SIP-панелі</p>
                  </div>
                 </ListItemHouse>
                <ListItemHouse> <IconHousePage3/> 
                   <div>
                     <h4>Вікна</h4><p>енергоефективні склопакети</p>
                   </div>
                </ListItemHouse>
                <ListItemHouse><IconHousePage4/>
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
