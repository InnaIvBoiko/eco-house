import styled from "styled-components";

export default function HeroDream() {
    return (
        <Section>
            <h2>Разом відбудуємо Україну  <span>подаруй сім’ї нове житло</span></h2>
            <p>Проєкт створений для переселенців, які втратили дім через війну</p>
        </Section>
    );
}

const Section = styled.section`
    width: 1440px;
    height: 753px;
    background: url("/images/dreamPage/hero-dream.jpg") no-repeat center;
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
`;
