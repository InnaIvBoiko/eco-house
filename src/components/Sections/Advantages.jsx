import styled from 'styled-components';
import IconHomePage1 from '../Icons/IconHomePage1';
import IconHomePage2 from '../Icons/IconHomePage2';
import IconHomePage3 from '../Icons/IconHomePage3';
import IconHomePage4 from '../Icons/IconHomePage4';
import { useEffect, useState } from 'react';

export default function Advantages() {
    const [imgSrc, setImgSrc] = useState("/images/homePage/img1.jpg");
    const [imgWidth, setImgWidth] = useState(window.innerWidth);
    const [imgHeight, setImgHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      function updateImgSrc() {
        if (window.innerWidth <= 743) {
          setImgSrc("/images/homePage/img1-tablet.jpg");
          setImgWidth("288");
          setImgHeight("226");
        } else if (window.innerWidth <= 1439) {
          setImgSrc("/images/homePage/img1-tablet.jpg");
          setImgWidth("696");
          setImgHeight("497");
        } else {
          setImgSrc("/images/homePage/img1.jpg");
          setImgWidth("1440");
          setImgHeight("768");
        }
      }
      updateImgSrc();
      window.addEventListener('resize', updateImgSrc);
      return () => window.removeEventListener('resize', updateImgSrc);
    }, []);
  
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
      <SectionContent>
        <FlexSpaceBetweenNoWrap>
          <h2>
            <span>Еко</span>Гніздо
          </h2>
          <h3>
            дім для <span>життя в гармонії</span> з природою
          </h3>
        </FlexSpaceBetweenNoWrap>
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
          <img src={imgSrc} alt="House" width={imgWidth} height={imgHeight} />
        </FlexSpaceBetween>
      </SectionContent>
    </section>
  );
}

const AdvantagesList = styled.ul`
  background: #006837;
  padding: 60px 74px;
  display: flex;
  justify-content: space-between;
  gap: 84px;

  @media (max-width: 1439px) {
    width: 744px;
    padding: 41px 24px;
    gap: 16px;
  }
  @media (max-width: 743px) {
    width: 320px;
    flex-wrap: wrap;
    gap: 24px;
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

  @media (max-width: 1439px) {
    font-size: 32px;
  }
  
  @media (max-width: 743px) {
    font-size: 24px;
    width: calc((100% - 24px) / 2);
    
    span {
      font-size: 16px;
    }
  }
`;

export const SectionContent = styled.div`
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

  @media (max-width: 1439px) {
    gap: 0px;

    h2 {
      font-size: 64px;
      margin-bottom: 24px;
    }

    h3 {
      font-size: 32px;
      margin-left: 40px;
      max-width: 340px;
    }

    p {
      font-size: 20px;
      margin-bottom: 40px;
    }

    @media (max-width: 743px) {
      padding: 24px 8px 60px 8px;

      h2 {
        font-size: 26px;
        margin-bottom: 12px;
      }

      h3 {
        font-size: 16px;
        margin-left: 6px;
      }

      p {
        font-size: 12px;
        margin-bottom: 24px;
      }
    }
`;

export const FlexSpaceBetweenNoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  img {
    border-radius: 10px;
  }
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    border-radius: 10px;
  }

  @media (max-width: 1439px) {
    flex-wrap: wrap;
    gap: 24px;

    p {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 0px;
    }
  }

  @media (max-width: 743px) {
    gap: 22px;

    p {
      font-size: 20px;
    }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: space-between;

  img {
    border-radius: 10px;
  }
  @media (max-width: 1439px) {
    gap: 24px;
  }

  @media (max-width: 743px) {
    img {
    width: 288px;
    height: 119px;
  }
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

  @media (max-width: 1439px) {
    width: 100%;
    padding-left: 0px;
}
`;
