
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { BtnPrimary } from '../Header/Header';
import { FlexSpaceBetween } from './Advantages';
import Square from '../Icons/Square';
import Bed from '../Icons/Bed';
import Bath from '../Icons/Bath';
import Discount from '../Icons/Discount';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import { useNavigate } from 'react-router-dom';

export default function DreamsMiniCatalog() {
  const navigate = useNavigate();
  const [isSlider, setIsSlider] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);
  
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setIsSlider(width <= 1439);
      setSlidesPerView(1);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      img: "/images/dreamPage/mini.jpg",
      title: "БудСвіт Міні",
      price: "безкоштовно для переселенців",
      area: "25 м²",
      beds: "1",
      baths: "1",
      discount: "А+",
      plan: "/images/catalogPage/plan.png",
      link: '/house/in-progress',
    },
    {
      img: "/images/dreamPage/grand.jpg",
      title: "БудСвіт Гранд",
      price: "безкоштовно для переселенців",
      area: "82 м²",
      beds: "2",
      baths: "2",
      discount: "А++",
      plan: "/images/catalogPage/plan.png",
      link: '/house/in-progress',
    },
  ];

  return (
    <section>
      <SectionContent style={{ alignItems: 'center' }}>
        <h2>Модульні будинки для тих, хто залишився без дому</h2>
        <h4>
          Війна забрала у багатьох українських родин звичне життя. Ми пропонуємо тимчасові та довгострокові модульні
          будинки, які допомагають переселенцям отримати дах над головою та безпеку.
        </h4>
        {isSlider ? (
          <SliderWrapper>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.custom-swiper-prev',
                nextEl: '.custom-swiper-next',
              }}
              spaceBetween={24}
              slidesPerView={slidesPerView}
              initialSlide={0}
              centeredSlides={false}
              loop={true}
              style={{ width: '100%', height: 'auto', paddingLeft: 0 }}
            >
              {cards.map((card, idx) => (
                <SwiperSlide key={idx} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Item>
                    <img src={card.img} alt={card.title} width={516} height={320} />
                    <FlexSpaceBetween style={{ alignItems: 'center' }}>
                      <h3>{card.title}</h3>
                      <span style={{ width: '175px', margin: '0 0 0 auto' }}>{card.price}</span>
                    </FlexSpaceBetween>
                    <IconList>
                      <IconListItem><Square /> <ListItemIconText>{card.area}</ListItemIconText></IconListItem>
                      <IconListItem><Bed /> <ListItemIconText>{card.beds}</ListItemIconText></IconListItem>
                      <IconListItem><Bath /> <ListItemIconText>{card.baths}</ListItemIconText></IconListItem>
                      <IconListItem><Discount /> <ListItemIconText>{card.discount}</ListItemIconText></IconListItem>
                    </IconList>
                    <img src={card.plan} alt={`План ${card.title}`} width={516} height={360} />
                    <BtnPrimary style={{ width: '100%' }} type="button" onClick={() => navigate(card.link)}>
                      Дізнатися більше
                    </BtnPrimary>
                  </Item>
                </SwiperSlide>
              ))}
              <NavButton className="custom-swiper-prev" $left>
                <PrevButton />
              </NavButton>
              <NavButton className="custom-swiper-next" $right>
                <NextButton />
              </NavButton>
            </Swiper>
          </SliderWrapper>
        ) : (
          <List>
            {cards.map((card, idx) => (
              <Item key={idx}>
                <img src={card.img} alt={card.title} width={516} height={320} />
                <FlexSpaceBetween style={{ alignItems: 'center' }}>
                  <h3>{card.title}</h3>
                  <span style={{ width: '175px' }}>{card.price}</span>
                </FlexSpaceBetween>
                <ul>
                  <li><Square /> <p>{card.area}</p></li>
                  <li><Bed /> <p>{card.beds}</p></li>
                  <li><Bath /> <p>{card.baths}</p></li>
                  <li><Discount /> <p>{card.discount}</p></li>
                </ul>
                <img src={card.plan} alt={`План ${card.title}`} width={516} height={360} />
                <BtnPrimary style={{ width: '100%' }} type="button" onClick={() => navigate(card.link)}>
                  Дізнатися більше
                </BtnPrimary>
              </Item>
            ))}
          </List>
        )}
      </SectionContent>
    </section>
  );
}

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
  .swiper {
    width: 100%;
    height: auto;
    padding-left: 0;
  }
  .swiper-slide {
    display: flex;
    justify-content: flex-start;
  }
`;

const NavButton = styled.div`
  position: absolute;
  top: 32%;
  z-index: 10;
  transform: translateY(-50%);
  ${({ $left }) => $left && `left: 0;`}
  ${({ $right }) => $right && `right: 0;`}
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  button {
    border-radius: 10px;
    background: none;
    padding: 0;
    outline: none;
    margin-left: 24px;
    margin-right: 24px;
    cursor: pointer;
  }

      @media (max-width: 743px) {
      top: 28%;
        button {
         margin-left: -2px;
         margin-right: -2px;
        }
    }
`;

export const SectionContent = styled.section`
  display: flex;
  width: 1440px;
  flex-direction: column;
  gap: 60px;
  padding: 60px 24px;

  h2 {
    width: 880px;
    font-weight: 600;
    font-size: 64px;
    text-align: center;
    color: #000;
    margin: 0 auto;
  }

  h4 {
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #000;
  }
  
  @media (max-width: 1439px) {
    width: 744px;
    padding: 110px 24px 40px 24px;
    gap: 16px;
    h2 {
      width: 698px;
      text-align: center;
      font-size: 48px;
    }

    h4 {
      width: 696px;
      font-size: 20px;
      margin: 0 auto 44px auto;

    }
  }
  
  @media (max-width: 743px) {
    width: 320px;
    padding: 60px 16px 20px 16px;
    gap: 12px;
    h2 {
      font-size: 24px;
      width: 294px;
    }

    h4 {
      width: 288px;
      font-size: 12px;
      margin-bottom: 28px;
    }
  }
`;

const List = styled.ul`
  width: 1168px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 24px;
`;

const Item = styled.li`
  border-radius: 10px;
  padding: 32px 24px;
  width: calc((100% - 40px) / 2);
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
  background: #fff;

  h3 {
    font-weight: 600;
    font-size: 32px;
    color: #000;
  }

  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #000;
  }

   ul {
        display: flex;
        gap: 24px;
    
    li {
        width: 100%;
        display: flex;
        gap: 16px!;
        justify-content: space-between;

        svg {
            height: 36px;
        }

        p {
            font-weight: 400;
            font-size: 24px;
            color: #000;
        }
      }
    }

  img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  @media (max-width: 1439px) {
    width: 564px;
    height: 1005px;
    margin: 0 auto;
  }

  @media (max-width: 743px) {
    width: 288px;
    height: auto;
    padding: 16px 8px 32px 8px;
    gap: 32px;

    h3 {
      font-size: 16px;
    }
    span {
      font-size: 10px;
      width: 86px!important;
    }

    img {
            width: 256px;
            height: 240px;
        }
  }
`;

const IconList = styled.ul`
    display: flex;
    gap: 24px;
    width: 512px!important;
    height: 36px;
    justify-content: space-between;
`;

const IconListItem = styled.li`
    max-width: 116px;
    display: flex;
    gap: 8px!important;
    align-items: center;

    svg {
        height: 36px;

        @media (max-width: 743px) {
          height: 22px!important;
        }
    }

    @media (max-width: 743px) {
      gap: 8px;
    }
`;

const ListItemIconText = styled.p`
  font-weight: 400;
  font-size: 24px!important;
  margin: 0!important;
  color: #000;

  @media (max-width: 743px) {
    font-size: 16px!important;
  }
`;