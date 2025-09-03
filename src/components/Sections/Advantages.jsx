import styled from 'styled-components';
import IconHomePage1 from '../Icons/IconHomePage1';
import IconHomePage2 from '../Icons/IconHomePage2';
import IconHomePage3 from '../Icons/IconHomePage3';
import IconHomePage4 from '../Icons/IconHomePage4';

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
        <FlexSpaceBetween>
          <FlexColumn>
            <AdvantagesListIcons>
              <li> <IconHomePage1 /> <p><span>Енергоефективність</span> - економія до 50% енергії</p></li>
              <li> <IconHomePage2 /> <p><span>Мобільність</span> - встановлюється за один тиждень</p></li>
              <li> <IconHomePage3 /> <p><span>Екологічність</span> - натуральні матеріали та сонячні панелі</p></li>
              <li> <IconHomePage4 /> <p><span>Доступність</span> - відчутно дешевше за традиційне житло</p></li>
            </AdvantagesListIcons>
            <img src="/images/homePage/img2.jpg" alt="House" width={801} height={342} />
            <p><span>Еко</span>Гніздо - це благодійний проєкт, що допомагає створювати доступне та екологічне житло. Ми поєднуємо сучасні технології, стильний дизайн та продумані планування, щоб ваш новий дім був затишним та безпечним</p>
          </FlexColumn>
          <img src="/images/homePage/img1.jpg" alt="House" width={567} height={884}/>
        </FlexSpaceBetween>
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

    span {
      color: #006837;
      font-weight: 600;
    }
  }
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: space-between;
`;

const AdvantagesListIcons = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 566px;
  padding-left: 118px;

  li {
    display: flex;
    align-items: center;
    gap: 16px;

    svg {
      min-width: 60px;
      min-height: 60px;
    }

    p {
      margin: 0;
    }
  }
`;
