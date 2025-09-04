import styled from "styled-components";

export default function Donat() {
    return (
        <Section>
            <h2>Підтримай нашу ініціативу – <span>допоможи сім’ям отримати</span> своє <span>Еко</span>Гніздо</h2>
            <DonatButton type="button">Зробити внесок</DonatButton>
        </Section>
    );
}

const Section = styled.section`
    width: 1440px;
    height: 529px;  
    background-image: url('/images/homePage/donat-bg.jpg');
    background-size: cover;
    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    h2 {
        font-weight: 600;
        font-size: 64px;
        text-align: center;
        color: #000;
    }

    span {
        color: #006837;
    }
`;
const DonatButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 20px 24px;
    width: 446px;
    height: 60px;
    box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
    background: #fff;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #000;

    &:hover {
        background: #25a02a;
        color: #fff;
    }
`;