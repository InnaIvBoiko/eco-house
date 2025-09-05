// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnPrimary } from "../Header/Header";
import { FlexSpaceBetween } from "./Advantages";
import Square from "../Icons/Square";
import Bed from "../Icons/Bed";
import Bath from "../Icons/Bath";
import Discount from "../Icons/Discount";

export default function DreamsMiniCatalog() {
    // const navigate = useNavigate();
    return (
        <section>
            <SectionContent style={{alignItems: 'center'}}>
                <h2>Модульні будинки для тих, хто залишився без дому</h2>
                <p>Війна забрала у багатьох українських родин звичне життя. Ми пропонуємо тимчасові та довгострокові модульні будинки, які допомагають переселенцям отримати дах над головою та безпеку.</p>
                <List>     
                    <Item>
                        <img src="/images/dreamPage/mini.jpg" alt="БудСвіт Міні" width="516" height="320" />
                        <FlexSpaceBetween style={{alignItems: 'center'}}>
                            <h3>БудСвіт Міні</h3>
                            <p style={{width: '175px'}}>безкоштовно для переселенців</p>
                        </FlexSpaceBetween>
                        <ul>
                            <li><Square /> <p>25 м²</p></li>
                            <li><Bed /> <p>1</p></li>
                            <li><Bath /> <p>1</p></li>
                            <li><Discount /> <p>А+</p></li>
                        </ul>
                        <img src="/images/catalogPage/plan.png" alt="План Гармонія" width="516" height="360"/>
                        <BtnPrimary style={{width: '100%'}} type="button">Дізнатися більше</BtnPrimary>
                    </Item>
                    <Item>
                        <img src="/images/dreamPage/grand.jpg" alt="БудСвіт Гранд" width="516" height="320" />
                        <FlexSpaceBetween style={{alignItems: 'center'}}>
                            <h3>БудСвіт Гранд</h3>
                            <p style={{width: '175px'}}>безкоштовно для переселенців</p>
                        </FlexSpaceBetween>
                        <ul>
                            <li><Square /> <p>82 м²</p></li>
                            <li><Bed /> <p>2</p></li>
                            <li><Bath /> <p>2</p></li>
                            <li><Discount /> <p>А++</p></li>
                        </ul>
                        <img src="/images/catalogPage/plan.png" alt="План Горизонт" width="516" height="360" />
                        <BtnPrimary style={{width: '100%'}} type="button">Дізнатися більше</BtnPrimary>
                    </Item>
                </List>   
            </SectionContent>
        </section>
  );
}


export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 24px;

  h2 {
    width: 880px;
    font-weight: 600;
    font-size: 64px;
    text-align: center;
    color: #000;
  }

  p {
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #000;
  }
`;

const List = styled.ul`
    width: 1168px;
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

    p {
        font-weight: 600;
        font-size: 20px;
        line-height: 120%;
        letter-spacing: -0.02em;
        color: #000;
    }

    ul {
        display: flex;
        gap: 36px;
        justify-content: space-between;
        width: 512px;
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