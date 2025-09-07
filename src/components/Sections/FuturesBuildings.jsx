import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexSpaceBetween } from "./Advantages";
import Square from "../Icons/Square";
import Bed from "../Icons/Bed";
import Bath from "../Icons/Bath";
import Discount from "../Icons/Discount";
import { BtnPrimary } from "../Header/Header";

export default function FuturesBuildings() {
    const navigate = useNavigate();

    return (
       <Section>
            <h2>Будинки майбутнього</h2>
            <List>
                <Item onClick={() => navigate('/house/compact')}>
                    <img src="/images/catalogPage/compact.jpg" alt="Будинок майбутнього Компакт" width="516" height="320" />
                    <FlexSpaceBetween style={{alignItems: 'center'}}>
                      <h3>Компакт</h3>
                      <h4>476 000 грн</h4>
                    </FlexSpaceBetween>
                    <ul>
                        <li><Square /> <p>25 м²</p></li>
                        <li><Bed /> <p>1</p></li>
                        <li><Bath /> <p>1</p></li>
                        <li><Discount /> <p>А+</p></li>
                    </ul>
                    <img src="/images/catalogPage/plan.png" alt="План Компакт" width="516" height="360"/>
                    <BtnPrimary style={{width: '100%'}} type="button">Дізнатися більше</BtnPrimary>
                </Item>
                <Item onClick={() => navigate('/house/premium')}>
                    <img src="/images/catalogPage/premium.jpg" alt="Будинок майбутнього Преміум" width="516" height="320" />
                    <FlexSpaceBetween style={{alignItems: 'center'}}>
                      <h3>Преміум</h3>
                      <h4>982 000 грн</h4>
                    </FlexSpaceBetween>
                    <ul>
                        <li><Square /> <p>82 м²</p></li>
                        <li><Bed /> <p>2</p></li>
                        <li><Bath /> <p>2</p></li>
                        <li><Discount /> <p>А++</p></li>
                    </ul>
                    <img src="/images/catalogPage/plan.png" alt="План Преміум" width="516" height="360"/>
                    <BtnPrimary style={{width: '100%'}} type="button">Дізнатися більше</BtnPrimary>

                </Item>
                <Item>
                    <img src="/images/catalogPage/harmony.jpg" alt="Будинок майбутнього Гармонія" width="516" height="320" />
                    <FlexSpaceBetween style={{alignItems: 'center'}}>
                      <h3>Гармонія</h3>
                      <h4>632 000 грн</h4>
                    </FlexSpaceBetween>
                    <ul>
                        <li><Square /> <p>58 м²</p></li>
                        <li><Bed /> <p>1</p></li>
                        <li><Bath /> <p>1</p></li>
                        <li><Discount /> <p>А++</p></li>
                    </ul>
                    <img src="/images/catalogPage/plan.png" alt="План Гармонія" width="516" height="360"/>
                    <BtnPrimary style={{width: '100%'}} type="button">Дізнатися більше</BtnPrimary>
                </Item>
                <Item>
                    <img src="/images/catalogPage/horizon.jpg" alt="Будинок майбутнього Горизонт" width="516" height="320" />
                    <FlexSpaceBetween style={{alignItems: 'center'}}>
                      <h3>Горизонт</h3>
                      <h4>992 000 грн</h4>
                    </FlexSpaceBetween>
                    <ul>
                        <li><Square /> <p>78 м²</p></li>
                        <li><Bed /> <p>2</p></li>
                        <li><Bath /> <p>2</p></li>
                        <li><Discount /> <p>А++</p></li>
                    </ul>
                    <img src="/images/catalogPage/plan.png" alt="План Горизонт" width="516" height="360" />
                    <BtnPrimary style={{width: '100%'}} type="button">Дізнатися більше</BtnPrimary>
                </Item>
            </List>
      </Section>
  )
}

const Section = styled.section`
  padding: 120px 136px 100px 136px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  h2 {
    font-weight: 600;
    font-size: 64px;
    text-align: center;
    color: #000;
  }
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 24px;
`;

const Item = styled.li`
    border-radius: 10px;
    padding: 32px 24px;
    width: calc((100% - 40px) / 2);
    display: flex;
    flex-direction: column;
    gap: 32px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
    background: #fff;

    h3 {
        font-weight: 600;
        font-size: 32px;
        color: #000;
    }

    h4 {
        font-weight: 600;
        font-size: 26px;
        line-height: 92%;
        letter-spacing: -0.02em;
        color: #000;
    }

    ul {
        display: flex;
        gap: 36px;
        justify-content: space-between;

        li {
            display: flex;
            align-items: center;
            gap: 16px;

            p {
                font-weight: 500;
                font-size: 20px;
                color: #000;
                margin: 0;
            }
        }
    }

    img {
        border-radius: 10px;
        max-width: 100%;
        height: auto;
    }

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;
