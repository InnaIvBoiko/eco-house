
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexSpaceBetween } from "./Advantages";
import Square from "../Icons/Square";
import Bed from "../Icons/Bed";
import Bath from "../Icons/Bath";
import Discount from "../Icons/Discount";
import { BtnPrimary } from "../Header/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

export default function FuturesBuildings() {
    const navigate = useNavigate();
    const [isSlider, setIsSlider] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsSlider(window.innerWidth <= 1439);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cards = [
        {
            img: "/images/catalogPage/compact.jpg",
            title: "Компакт",
            price: "476 000 грн",
            area: "25 м²",
            beds: "1",
            baths: "1",
            discount: "А+",
            plan: "/images/catalogPage/plan.png",
            link: '/house/compact',
        },
        {
            img: "/images/catalogPage/premium.jpg",
            title: "Преміум",
            price: "982 000 грн",
            area: "82 м²",
            beds: "2",
            baths: "2",
            discount: "А++",
            plan: "/images/catalogPage/plan.png",
            link: '/house/in-progress',
        },
        {
            img: "/images/catalogPage/harmony.jpg",
            title: "Гармонія",
            price: "632 000 грн",
            area: "58 м²",
            beds: "1",
            baths: "1",
            discount: "А++",
            plan: "/images/catalogPage/plan.png",
            link: '/house/in-progress',
        },
        {
            img: "/images/catalogPage/horizon.jpg",
            title: "Горизонт",
            price: "992 000 грн",
            area: "78 м²",
            beds: "2",
            baths: "2",
            discount: "А++",
            plan: "/images/catalogPage/plan.png",
            link: '/house/in-progress',
        },
    ];

    return (
        <Section>
            <h2>Будинки майбутнього</h2>
            {isSlider ? (
                <SliderWrapper>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.custom-swiper-prev',
                            nextEl: '.custom-swiper-next',
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        initialSlide={0}
                        centeredSlides={false}
                        loop={true}
                        style={{ width: '100%', height: 'auto', paddingLeft: 0 }}
                    >
                        {cards.map((card, idx) => (
                            <SwiperSlide key={idx} style={{display: 'flex', justifyContent: 'flex-start'}}>
                                <Item onClick={() => card.link && navigate(card.link)}>
                                    <img src={card.img} alt={`Будинок майбутнього ${card.title}`} width={516} height={320} />
                                    <FlexSpaceBetween style={{alignItems: 'center'}}>
                                        <h3>{card.title}</h3>
                                        <h4>{card.price}</h4>
                                    </FlexSpaceBetween>
                                    <ul>
                                        <li><Square /> <p>{card.area}</p></li>
                                        <li><Bed /> <p>{card.beds}</p></li>
                                        <li><Bath /> <p>{card.baths}</p></li>
                                        <li><Discount /> <p>{card.discount}</p></li>
                                    </ul>
                                    <img src={card.plan} alt={`План ${card.title}`} width={516} height={360} />
                                    <BtnPrimary style={{width: '100%'}} type="button" onClick={() => navigate(card.link)}>Дізнатися більше</BtnPrimary>
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
                        <Item key={idx} onClick={() => card.link && navigate(card.link)}>
                            <img src={card.img} alt={`Будинок майбутнього ${card.title}`} width={516} height={320} />
                            <FlexSpaceBetween style={{alignItems: 'center'}}>
                                <h3>{card.title}</h3>
                                <h4>{card.price}</h4>
                            </FlexSpaceBetween>
                            <ul>
                                <li><Square /> <p>{card.area}</p></li>
                                <li><Bed /> <p>{card.beds}</p></li>
                                <li><Bath /> <p>{card.baths}</p></li>
                                <li><Discount /> <p>{card.discount}</p></li>
                            </ul>
                            <img src={card.plan} alt={`План ${card.title}`} width={516} height={360} />
                            <BtnPrimary style={{width: '100%'}} type="button" onClick={() => navigate(card.link)}>Дізнатися більше</BtnPrimary>
                        </Item>
                    ))}
                </List>
            )}
        </Section>
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
    top: 30%;
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
        margin-left: 0px;
        margin-right: 0px;
        cursor: pointer;
        z-index: 10;
    }

    @media (max-width: 743px) {
      top: 31%;
        button {
         margin-left: -2px;
         margin-right: -2px;
        }
    }
`;

const Section = styled.section`
  padding: 120px 136px 100px 136px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  h2 {
    font-weight: 600;
    font-size: 64px;
    text-align: center;
    color: #000;
  }

    @media (max-width: 1439px) {
       h2 {
        font-size: 48px;
        text-wrap: nowrap;
       }

    @media (max-width: 743px) {
      padding: 60px 16px;
      gap: 24px;

      h2 {
        font-size: 24px;
      }
    }
`;

const List = styled.ul`
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

    h4 {
        font-weight: 600;
        font-size: 26px;
        line-height: 92%;
        letter-spacing: -0.02em;
        color: #000;
    }

    ul {
        display: flex;
        gap: 36px;
        justify-content: space-between;

        li {
            display: flex;
            align-items: center;
            gap: 16px;

            p {
                font-weight: 500;
                font-size: 20px;
                color: #000;
                margin: 0;
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
    }

    @media (max-width: 743px) {
        width: 288px;
        height: 658px;
        gap: 24px;
       
        h2 {
            font-size: 16px;
        }
        h3 {
            font-size: 16px;
            letter-spacing: -0.02em;
            text-wrap: nowrap;
        }

        h4 {
            font-size: 16px;
        }
        ul {
            gap: 8px;

            li {
                gap: 8px;
                svg{
                    width: 20px;
                    height: 20px;
                }
                p {
                    font-size: 13px;
                    text-wrap: nowrap;
                }
            }
        }
        img {
            height: 205px;
        }
    }
`;
