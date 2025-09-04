import styled from "styled-components";
import { BtnPrimary, BtnSecondary } from "../Header/Header";
import { FlexSpaceBetween, SectionContent } from "./Advantages";
import Square from "../Icons/Square";
import Bed from "../Icons/Bed";
import Discount from "../Icons/Discount";

export default function MiniCatalog() {
    return (
        <section>
            <SectionContent style={{alignItems: 'center'}}>
                <h3>Моделі для життя</h3>
                <CatalogList>
                    <CatalogItem>
                        <img src="/images/homePage/card1.jpg" alt="Catalog Item 1" />
                        <h2>Компакт</h2>
                        <ul>
                            <li><Square /> <p>25 м²</p></li>
                            <li><Bed /> <p>1</p></li>
                            <li><Discount /> <p>А+</p></li>
                        </ul>
                        <FlexSpaceBetween style={{ alignItems: 'center' }}>
                            <BtnPrimary type="button">Дізнатися більше</BtnPrimary>
                            <h3>1 276 000 грн</h3>
                        </FlexSpaceBetween>
                    </CatalogItem>
                    <CatalogItem>
                        <img src="/images/homePage/card2.jpg" alt="Catalog Item 2" />
                        <h2>Сімейний</h2>
                        <ul>
                            <li><Square /> <p>45 м²</p></li>
                            <li><Bed /> <p>2</p></li>
                            <li><Discount /> <p>А++</p></li>
                        </ul>
                        <FlexSpaceBetween style={{ alignItems: 'center' }}>
                            <BtnPrimary type="button">Дізнатися більше</BtnPrimary>
                            <h3>1 276 000 грн</h3>
                        </FlexSpaceBetween>
                    </CatalogItem>
                    <CatalogItem>
                        <img src="/images/homePage/card3.jpg" alt="Catalog Item 3" />
                        <h2>Преміум</h2>
                        <ul>
                            <li><Square /> <p>60 м²</p></li>
                            <li><Bed /> <p>3</p></li>
                            <li><Discount /> <p>А+++</p></li>
                        </ul>
                        <FlexSpaceBetween style={{ alignItems: 'center' }}>
                            <BtnPrimary type="button">Дізнатися більше</BtnPrimary>
                            <h3>1 276 000 грн</h3>
                        </FlexSpaceBetween>
                    </CatalogItem>
                </CatalogList>
                <BtnSecondary style={{width: '448px'}}>Подивитися всі</BtnSecondary>
            </SectionContent>
        </section>
  );
}

const CatalogList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    list-style-type: none;
    padding: 0;
`;

const CatalogItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 10px;
    width: 448px;
    height: 605px;
    padding: 24px 24px 60px 24px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
    background: #fff;
    overflow: hidden;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    img {
        max-width: 100%;
        height: auto;
    }


    h2 {
        font-weight: 600;
        font-size: 32px;
        color: #000;
    }

    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: #000;
    }

    ul {
        display: flex;
        gap: 24px;
    }
        li {
            display: flex;
            align-items: flex-end;
            gap: 16px;

            svg {
                height: 36px;
            }

            p {
                font-weight: 400;
                font-size: 24px;
                color: #000;
            }
        }

`;