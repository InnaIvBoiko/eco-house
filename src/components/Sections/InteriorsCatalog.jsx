
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from "styled-components";
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const images = [
    { src: "/images/catalogPage/interiors1.jpg", alt: "Інтер'єр 1", width: 409, height: 494 },
    { src: "/images/catalogPage/interiors2.jpg", alt: "Інтер'єр 2", width: 568, height: 612 },
    { src: "/images/catalogPage/interiors3.jpg", alt: "Інтер'єр 3", width: 409, height: 494 },
    // duplicate images to enable looping effect
    { src: "/images/catalogPage/interiors1.jpg", alt: "Інтер'єр 1", width: 409, height: 494 },
    { src: "/images/catalogPage/interiors2.jpg", alt: "Інтер'єр 2", width: 568, height: 612 },
    { src: "/images/catalogPage/interiors3.jpg", alt: "Інтер'єр 3", width: 409, height: 494 },
];

export default function InteriorsCatalog() {
    return (
        <Section>
            <h2>Інтер'єри <span>готових модульних будинків</span> під ключ</h2>
            <SliderWrapper>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.custom-swiper-prev',
                        nextEl: '.custom-swiper-next',
                    }}
                    spaceBetween={24}
                    slidesPerView={3}
                    centeredSlides={true}
                    initialSlide={1}
                    loop={true}
                    style={{ position: 'relative' }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        744: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                        1440: {
                            slidesPerView: 3,
                            centeredSlides: true,
                        }
                    }}
                >
                    {images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <ImgStyled
                                src={img.src}
                                alt={img.alt}
                                width={img.width}
                                height={img.height}
                            />
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

    @media (max-width: 1439px) {
        margin-bottom: 0px;
        h2 {
            font-size: 40px;
        }
    }

    @media (max-width: 743px) {
        gap: 24px;
        h2 {
            font-size: 20px;
            width: auto;
            margin-left: 16px;
        }
    }
`;


const SliderWrapper = styled.div`
    position: relative;
    width: 1440px;
    height: 612px;
    display: flex;
    align-items: center;

    .swiper {
        width: 100%;
        height: 100%;
        padding-bottom: 0;
        display: flex;
        align-items: center;
    }
    .swiper-wrapper {
        align-items: flex-end !important;
    }
    @media (max-width: 1439px) {
        width: 744px;
        min-width: 0;
        max-width: 744px;
        padding: 0 0px;
    }

    @media (max-width: 743px) {
        width: 320px;
        min-width: 0;
        max-width: 320px;
    }
`;

const ImgStyled = styled.img`
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.3s;
    display: block;
    margin: 0 auto;
    width: 409px;
    height: 494px;
    position: relative;

    .swiper-slide-active & {
        width: 568px;
        height: 612px;
        z-index: 2;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        margin-bottom: 0;
    }

    @media (max-width: 743px) {
        width: 300px;
        height: 612px;
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
        margin-left: 64px;
        margin-right: 64px;
        cursor: pointer;
    }

    @media (max-width: 1439px) {
        button {
         margin-left: 120px;
         margin-right: 120px;
        }
    }

    @media (max-width: 743px) {
        button {
         margin-left: 0px;
         margin-right: 0px;
        }
    }
`;
