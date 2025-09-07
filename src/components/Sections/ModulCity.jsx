import styled from "styled-components";
import { FlexSpaceBetween } from "./Advantages";
import { BtnPrimary } from "../Header/Header";
import DreamPark from "../Icons/DreamPark";
import DreamCondo from "../Icons/DreamCondo";
import DreamHouse from "../Icons/DreamHouse";
import DreamAgree from "../Icons/DreamAgree";

export default function ModulCity() {
    return (
        <SectionContent style={{alignItems: 'center'}}>
            <h2>Мріємо побудувати модульне містечко для переселенців</h2>
            <FlexSpaceBetween style={{gap: '40px'}}>
                <TextColumn>
                    <p>Уявіть містечко, де сотні українських родин знайдуть дах над головою, затишок і безпеку. Кожен модульний будинок — це маленький острів турботи та надії, а разом вони створюють живу спільноту, де люди відчувають підтримку один одного.</p>
                    <p>У цьому містечку будуть не просто будинки:</p>
                    <ul>
                        <Item><DreamPark /> <p>зелені зони для прогулянок та відпочинку</p></Item>
                        <Item><DreamCondo /> <p>спільні простори для культурних заходів і навчання</p></Item>
                        <Item><DreamHouse /> <p>комфортні модулі для тимчасового проживання сімей</p></Item>
                        <Item><DreamAgree /> <p>дорослі знаходять підтримку одне одного та відчуття спільноти</p></Item>
                    </ul>
                    <BtnPrimary style={{ width: '100%' }} type="button">Підтримати мрію</BtnPrimary>
                    <ConditionalText>Це умовна кнопка для конкурсу — <span>ми не збираємо кошти,</span> але хочемо показати, як це могло б виглядати насправді</ConditionalText>
                </TextColumn>
                <img src="/images/dreamPage/modul-city.jpg" alt="Модульне містечко" width="692" height="790"/>
            </FlexSpaceBetween>
        </SectionContent>
  );
}

export const SectionContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 60px 24px;
    width: 1440px;
    h2 {
        font-weight: 600;
        font-size: 64px;
        text-align: center;
        color: #000;
    }

    p {
        font-weight: 500;
        font-size: 24px;
        color: #000;
    }
`;

const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    ul {
        width: 638px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`;

const Item = styled.li`
    display: flex;
    gap: 16px;

    p {
        font-weight: 500;
        font-size: 28px;
        color: #006837;
    }
`;

const ConditionalText = styled.p`
    font-style: italic;
    font-weight: 500;
    font-size: 20px !important;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #666 !important;
    width: 638px;
    margin-top: -8px;

    span { color: #006837; }
`;
