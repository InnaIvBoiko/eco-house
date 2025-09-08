import styled from 'styled-components';
import { FlexSpaceBetween } from './Advantages';
import { BtnPrimary } from '../Header/Header';
import DreamPark from '../Icons/DreamPark';
import DreamCondo from '../Icons/DreamCondo';
import DreamHouse from '../Icons/DreamHouse';
import DreamAgree from '../Icons/DreamAgree';

export default function ModulCity() {
  return (
    <SectionContent style={{ alignItems: 'center' }}>
      <h2>Мріємо побудувати модульне містечко для переселенців</h2>
      <FlexSpaceBetween>
        <img className="modulcityimageMobile" src="/images/dreamPage/modul-city.jpg" alt="Модульне містечко" />
        <TextColumn>
          <p>
            Уявіть містечко, де сотні українських родин знайдуть дах над головою, затишок і безпеку. Кожен модульний
            будинок — це маленький острів турботи та надії, а разом вони створюють живу спільноту, де люди відчувають
            підтримку один одного. <br />
            <br />У цьому містечку будуть не просто будинки:
          </p>
          <ul>
            <Item>
              <DreamPark /> <p>зелені зони для прогулянок та відпочинку</p>
            </Item>
            <Item>
              <DreamCondo /> <p>спільні простори для культурних заходів і навчання</p>
            </Item>
            <Item>
              <DreamHouse /> <p>комфортні модулі для тимчасового проживання сімей</p>
            </Item>
            <Item>
              <DreamAgree /> <p>дорослі знаходять підтримку одне одного та відчуття спільноти</p>
            </Item>
          </ul>
          <BtnPrimary style={{ width: '100%' }} type="button">
            Підтримати мрію
          </BtnPrimary>
          <ConditionalText>
            Це умовна кнопка для конкурсу — <span>ми не збираємо кошти,</span> але хочемо показати, як це могло б
            виглядати насправді
          </ConditionalText>
        </TextColumn>
        <img
          className="modulcityimageMain"
          src="/images/dreamPage/modul-city.jpg"
          alt="Модульне містечко"
          width="692"
          height="790"
        />
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

  > div:first-of-type {
    gap: 40px;
  }

  h2 {
    font-weight: 600;
    font-size: 64px;
    text-align: center;
    color: #000;
  }

  > p:first-of-type {
    font-weight: 500;
    font-size: 24px;
    color: #000;
  }

  .modulcityimageMobile {
    display: none;
  }

  @media (max-width: 1439.8px) {
    padding: 60px 24px;
    width: 744px;
    gap: 60px;
    > div:first-of-type {
      gap: 60px;
    }

    h2 {
      font-size: 48px;
    }

    div {
      width: 100%;
    }

    .modulcityimageMobile {
      border-radius: 10px;
      max-width: 696px;
      height: 794px;
      display: flex;
    }

    .modulcityimageMain {
      display: none;
    }
  }

  @media (max-width: 743.8px) {
    padding: 0 16px;
    width: 320px;
    gap: 16px;

    h2 {
      font-size: 24px;
    }

    div {
      width: 100%;
    }

    .modulcityimageMobile {
      border-radius: 10px;
      width: 288px;
      height: 328px;
      display: flex;
    }

    .modulcityimageMain {
      display: none;
    }
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
  @media (max-width: 1439.8px) {
    div > p:first-of-type {
      font-size: 24px;
    }
  }
  @media (max-width: 743.8px) {
    div > p:first-of-type {
      font-size: 18px;
    }
    ul {
      width: 288px;
    }
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

  @media (max-width: 1439.8px) {
    width: 696px;
    p {
      width: 610px;
      font-size: 28px;
      align-self: center;
    }
  }

  @media (max-width: 743.8px) {
    width: 288px;
    p {
      width: 202px;
      font-size: 18px;
      align-self: center;
    }
  }
`;

const ConditionalText = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #666 !important;
  width: 638px;
  margin-top: -8px;

  span {
    color: #006837;
  }

  @media (max-width: 1439.8px) {
    width: 696px;
    font-size: 20px !important;
    margin-top: -12px;
  }

  @media (max-width: 743.8px) {
    width: 288px;
    font-size: 12px !important;
    margin-top: -12px;
  }
`;
