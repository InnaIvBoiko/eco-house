import styled from "styled-components";

export default function InteriorsCatalog() {
    return (
        <Section>
            <h2>Інтер'єри <span>готових модульних будинків</span> під ключ</h2>
            <FotoWrapper>
                <img src="/images/catalogPage/interiors1.jpg" alt="Інтер'єр 1" width="409" height="494" />
                <img src="/images/catalogPage/interiors2.jpg" alt="Інтер'єр 2" width="568" height="612" />
                <img src="/images/catalogPage/interiors3.jpg" alt="Інтер'єр 3" width="409" height="494" />
            </FotoWrapper>
        </Section>
    );
}

const Section = styled.section`
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    h2 {
        width: 720px;
        font-weight: 600;
        font-size: 48px;
        color: #000;
        margin-left: 24px;
    }

    span {
        color: #006837;
    }
`;

const FotoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;

    img {
        border-radius: 10px;
    }
`;
