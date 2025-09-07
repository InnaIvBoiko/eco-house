
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnSecondary } from "../Header/Header";
import { FlexSpaceBetween, FlexSpaceBetweenNoWrap } from "./Advantages";
import Square from "../Icons/Square";
import Bed from "../Icons/Bed";
import Discount from "../Icons/Discount";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

export default function MiniCatalog() {
    const navigate = useNavigate();
    const [isSlider, setIsSlider] = useState(false);
    const [slidesPerView, setSlidesPerView] = useState(1.5);
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setIsSlider(width <= 1439);
            if (width <= 743) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(1.5);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cards = [
        {
            img: "/images/homePage/card1.jpg",
            title: "Компакт",
            area: "25 м²",
            beds: "1",
            discount: "А+",
            price: "476 000 грн",
            link: '/house/compact',
        },
        {
            img: "/images/homePage/card2.jpg",
            title: "Сімейний",
            area: "45 м²",
            beds: "2",
            discount: "А++",
            price: "982 000 грн",
            link: '/house/family',
        },
        {
            img: "/images/homePage/card3.jpg",
            title: "Преміум",
            area: "60 м²",
            beds: "3",
            discount: "А+++",
            price: "1 276 000 грн",
            link: '/house/premium',
        },
    ];

    return (
        <section>
            <SectionContent style={{alignItems: 'center'}}>
                <h3>Моделі для життя</h3>
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
                                <SwiperSlide key={idx} style={{display: 'flex', justifyContent: 'flex-start'}}>
                                    <CatalogItem>
                                        <img src={card.img} alt={card.title} />
                                        <h2>{card.title}</h2>
                                        <ul>
                                            <li><Square /> <p>{card.area}</p></li>
                                            <li><Bed /> <p>{card.beds}</p></li>
                                            <li><Discount /> <p>{card.discount}</p></li>
                                        </ul>
                                        <FlexSpaceBetweenNoWrap style={{ alignItems: 'center'}}>
                                            <BtnPrimary type="button" onClick={() => navigate(card.link)}>Дізнатися більше</BtnPrimary>
                                            <h3>{card.price}</h3>
                                        </FlexSpaceBetweenNoWrap>
                                    </CatalogItem>
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
                    <CatalogList>
                        {cards.map((card, idx) => (
                            <CatalogItem key={idx}>
                                <img src={card.img} alt={card.title} />
                                <h2>{card.title}</h2>
                                <ul>
                                    <li><Square /> <p>{card.area}</p></li>
                                    <li><Bed /> <p>{card.beds}</p></li>
                                    <li><Discount /> <p>{card.discount}</p></li>
                                </ul>
                                <FlexSpaceBetween style={{ alignItems: 'center' }}>
                                    <BtnPrimary type="button" onClick={() => navigate(card.link)}>Дізнатися більше</BtnPrimary>
                                    <h3>{card.price}</h3>
                                </FlexSpaceBetween>
                            </CatalogItem>
                        ))}
                    </CatalogList>
                )}
                {!isSlider && <BtnSecondary style={{width:  '448px'}} onClick={() => navigate('/catalog')}>Подивитися всі</BtnSecondary>}
            </SectionContent>
        </section>
    );
}

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 24px;

  h3 {
    font-weight: 600;
    font-size: 64px;
    color: #000000;
  }

    @media (max-width: 1439px) {
      h3 {
        font-size: 48px;
      }
    }

    @media (max-width: 743px) {
      gap: 24px;
      padding: 0px 16px;
      h3 {
        font-size: 24px;
      } 
    }
`;

const CatalogList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    list-style-type: none;
    padding: 0;
`;

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
    top: 50%;
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
      top: 46%;
        button {
         margin-left: -2px;
         margin-right: -2px;
        }
    }
`;

const CatalogItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 10px;
    width: 448px;
    height: 605px;
    padding: 24px 24px 60px 24px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
    background: #fff;
    overflow: hidden;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    img {
        max-width: 100%;
        height: auto;
    }

    h2 {
        font-weight: 600;
        font-size: 32px;
        color: #000;
    }

    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: #000;
    }

    ul {
        display: flex;
        gap: 24px;
    }
    
    li {
        display: flex;
        align-items: flex-end;
        gap: 16px;

        svg {
            height: 36px;
        }

        p {
            font-weight: 400;
            font-size: 24px;
            color: #000;
        }
    }

    @media (max-width: 743px) {
        width: 288px;
        height: 467px;
        padding: 24px 16px 36px 16px;
        gap: 24px;
       
        h2 {
            font-size: 24px;
        }
        h3 {
            font-size: 15px;
            letter-spacing: -0.02em;
            text-wrap: nowrap;
            margin-left: auto;
        }
        ul {
            gap: 8px;
        }
        li p {
            font-size: 16px;
        }
        img {
            width: 256px;
            height: 240px;
        }
    }
`;

const BtnPrimary = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #fff;
  border-radius: 5px;
  height: 60px;
  padding: 20px 24px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #0d6511;

  &:hover {
    background: #25a02a;
  }
  &:active {
    background: #25a02a;
  }
  &:disabled {
    background: #7a7a7a;
  }

    @media (max-width: 743px) {
        height: 50px;
        font-size: 16px;
        line-height: 150%;
        padding: 10px 8px;
        text-wrap: nowrap;
    }
`;