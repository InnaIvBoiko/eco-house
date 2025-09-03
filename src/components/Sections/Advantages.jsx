import styled from 'styled-components';

export default function Advantages() {
  return (
    <section>
      <AdvantagesList>
        <AdvantagesListItem>
          4500+ <span>щасливих мешканців</span>
        </AdvantagesListItem>
        <AdvantagesListItem>
          50% <span>енергоекономія</span>
        </AdvantagesListItem>
        <AdvantagesListItem>
          7 днів <span>монтаж будинку</span>
        </AdvantagesListItem>
        <AdvantagesListItem>
          100+ <span>партнерів та нагород</span>
        </AdvantagesListItem>
      </AdvantagesList>
      <AdvantagesContent>
        <FlexSpaceBetween>
          <h2>
            Еко<span>Гніздо</span>
          </h2>
          <h3 style={{ width: '684px' }}>
            дім для <span>життя в гармонії</span> з природою
          </h3>
        </FlexSpaceBetween>
        <p>
          Ми створюємо простір, де сучасний дизайн і екологічність поєднуються з турботою про мешканців. Тут є все для
          комфортного життя — від тиші й чистого повітря до якісного будівництва та безпечного середовища.
        </p>
      </AdvantagesContent>
    </section>
  );
}

const AdvantagesList = styled.ul`
  background: #006837;
  padding: 60px 74px;
  display: flex;
  justify-content: space-between;
  gap: 84px;
`;

const AdvantagesListItem = styled.li`
  font-weight: 600;
  font-size: 64px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 500;
    font-size: 24px;
    color: #cbcbcb;
  }
`;

const AdvantagesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 24px;

  h2 {
    font-weight: 600;
    font-size: 128px;
    color: #000000;

    span {
      color: #006837;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 64px;
    color: #000;

    span {
      color: #006837;
    }
  }

  p {
    font-weight: 500;
    font-size: 24px;
    color: #333;
  }
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
