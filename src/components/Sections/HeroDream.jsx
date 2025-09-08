import styled from 'styled-components';

export default function HeroDream() {
  return (
    <Section>
      <h2>
        Разом відбудуємо Україну <span>подаруй сім’ї нове житло</span>
      </h2>
      <p>Проєкт створений для переселенців, які втратили дім через війну</p>
    </Section>
  );
}

const Section = styled.section`
  width: 1440px;
  height: 753px;
  background: url('/images/dreamPage/hero-dream.jpg') no-repeat center;
  background-size: cover;
  padding: 60px 154px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-bottom: 120px;

  h2 {
    width: 1100px;
    font-weight: 700;
    font-size: 64px;
    text-align: center;
    color: #000;
  }
  span {
    color: #006837;
  }

  p {
    width: 309px;
    font-weight: 500;
    font-size: 24px;
    color: #000;
  }

  @media (max-width: 1439.8px) {
    width: 744px;
    height: 388px;
    padding: 0;
    gap: 0;
    background: url('/images/dreamPage/DreamPageHeroBgTablet.jpg') no-repeat center;

    h2 {
      width: 556px;
      font-size: 40px;
      margin: 15px auto 12px;
      text-align: center;
    }
    P {
      width: 257px;
      margin-left: 94px;
      font-size: 18px;
    }
  }

  @media (max-width: 743.8px) {
    width: 320px;
    height: 388px;
    padding: 0;
    margin-bottom: 0;
    gap: 0;
    background: url('/images/dreamPage/DreamPageHeroBgMobile.jpg') no-repeat center;

    h2 {
      width: 224px;
      font-size: 24px;
      margin: 15px 0 12px 46px;
      text-align: start;
    }
    P {
      width: 196px;
      margin-left: 46px;
      font-size: 13px;
    }
  }
`;
