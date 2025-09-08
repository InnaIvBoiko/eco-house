import { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import IconHousePage9 from '../Icons/IconsHousePage/IconHousePage9';


export default function HousePlan() {
  const images = [
    { src: "/images/housePage/Compact1.jpg", alt: "Вид спереду"  },
    { src: "/images/housePage/Compact2.jpg", alt: "Бічний фасад" },
    { src: "/images/housePage/Compact3.jpg", alt: "Задній фасад" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  

    const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
    return (
        <SectionHousePlan>
            <TitleSection>
                Атмосфера будинку
            </TitleSection>
            <MainImage>
          <button className="nav-btn left" onClick={prevSlide}>
            <ChevronLeft size={38} />
           </button>

        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />

        <button className="nav-btn right" onClick={nextSlide}>
          <ChevronRight size={38} />
        </button>
            </MainImage>
        <Thumbnails>
          {images.map((img, i) => (
            <img
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => setCurrentIndex(i)}
            className={i === currentIndex ? "active" : ""}
          />
        ))}
            </Thumbnails>

            <PlanSection>
                <h3>План будинку</h3>
                <img src="/images/housePage/housePlan.jpg" alt="План будинку" />
            </PlanSection>

        <HousePriceInfo>
          <h2>Що входить у вартість будинку</h2>
          <FirstImage src="/images/housePage/FullInfoSection1.png" alt="Будинок"/>
          <SecondImage src="/images/housePage/FullInfoSection2.png" alt="Будинок"/>
          <FirstCardList>
            <h3><IconHousePage9/> Конструкція та матеріали </h3>
            <ul>
              <li>Фундамент: гвинтові палі (не шкодять ґрунту, швидкий монтаж).</li>
              <li>Каркас: метал + дерев’яні елементи з сертифікованої деревини.</li>
              <li>Стіни: SIP-панелі з утепленням (екологічні матеріали).</li>
              <li>Дах: натуральні покрівельні матеріали, підготовка для сонячних панелей.</li>
              <li>Вікна: енергоефективні склопакети класу А+.</li>
              <li>Двері: утеплені, з підвищеною безпекою.</li>
            </ul>
          </FirstCardList>
          <SecondCardList>
            <h3><IconHousePage9/> Внутрішнє оздоблення </h3>
            <ul>
              <li>Стінові панелі з екологічних матеріалів.</li>
              <li>Підлога: ламінат/вініл високої міцності.</li>
              <li>LED-освітлення.</li>
              <li>Вбудовані розетки та вимикачі.</li>
            </ul>
          </SecondCardList>
          <ThirdCardList>
            <h3><IconHousePage9/> Інженерія </h3>
            <ul>
              <li>Система вентиляції з рекуперацією.</li>
              <li>Електропроводка (готова для підключення).</li>
              <li>Точки для підключення кухні та санвузла.</li>
              <li>Опалення (інфрачервоні панелі або тепловий насос — залежно від комплектації).</li>
            </ul>
          </ThirdCardList>
          <FourthCardList>
            <h3><IconHousePage9/> Додатково </h3>
            <ul>
              <li>Базові меблі (шафа-купе, кухня-мінімум).</li>
              <li>Санвузол з душовою кабіною.</li>
              <li>Гарантія: 5 років на конструкцію, 2 роки на обладнання.</li>
            </ul>
          </FourthCardList>
          <FifthCardList>
            <h3><IconHousePage9/> Доставка та монтаж </h3>
            <ul>
              <li>Доставка по Україні включена у вартість.</li>
              <li>Монтаж під ключ — 3–7 днів (залежно від ділянки).</li>
              <li>Підключення до мереж (електрика, вода, каналізація — за наявності на ділянці).</li>
            </ul>
          </FifthCardList>
        </HousePriceInfo>
        <BtnLeaveAppl>Залишити заявку</BtnLeaveAppl>
        
        </SectionHousePlan>
    );
}

const SectionHousePlan = styled.div`
padding: 60px 24px;
  @media (max-width: 1439px) {
    width: 744px;
    padding:100px 24px;
 
  }
  @media (max-width: 743px){
  width: 320px;
  padding: 60px 16px;
  }
`

const TitleSection = styled.h3`
font-weight: 600;
font-size: 48px;
color: #000;
margin-bottom: 60px;

@media (max-width: 1439px) {

}
  @media (max-width: 743px) {
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
  }

`

const MainImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  position:relative;

  img {
    width: 1391px;
    height: 800px;
    object-fit: cover;
    border-radius: 10px;

  }
      .nav-btn {
    position: absolute;
    top: 400px;
    transform: translateY(-50%);
    background: rgba(251, 254, 251, 0.4);  
    backdrop-filter: blur(5px);
    border: none;
    cursor: pointer;
    border-radius: 10%;
    transition: background 0.3s ease;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 11px;
  }

  .nav-btn:hover {
    background: rgba(251, 254, 251, 0.6); ;
  }

  .left {
    left: 60px;
  }

  .right {
    right: 60px;
  }

  @media (max-width: 1439px){

  margin-bottom: 24px;
  img {
    width: 696px;
    height: 483px;
  }
    .nav-btn {
    top: 250px;
    }
    .left {
    left: 40px;
  }

  .right {
    right: 40px;
  }
  }
  @media (max-width: 743px) {
  margin-bottom: 12px;
  img {
    width: 288px;
    height: 222px;
  }
    .nav-btn {
    top: 120px;
    width: 35px;
    height: 35px;
    }
    .left {
    left: 5px;
  }

  .right {
    right: 5px;
  }
  }
  }
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 60px;

  img {
    border-radius: 10px;
    width: 448px;
    height: 320px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: transform 0.3s ease;
  }


img:hover {
 
  filter: brightness(50%); 
  transform: scale(1.05);
}

img.active {
  filter: brightness(50%);
  transform: scale(1.05);
 
}

@media (max-width: 1439px){
  img {
    width: 217px;
    height: 201px;
  }

@media (max-width: 743px){
    gap: 9px;
    margin-bottom: 24px;

  img {
    width: 90px;
    height: 90px;
  }
    }
`;

const PlanSection = styled.div`
display: flex;
gap: 17px;
margin-bottom: 60px;

h3{
font-weight: 600;
font-size: 48px;
color: #000;
}
@media (max-width: 1439px) {
gap: 0;

h3{
font-weight: 600;
font-size: 36px;
}
img {
width: 442px;
height: 281px;
}

@media (max-width: 743px){
flex-wrap: wrap;
gap: 12px;


h3{
font-weight: 600;
font-size: 24px;
}
img {
width: 243px;
height: 145px;
}
}
}
`;

const HousePriceInfo = styled.div`
position: relative;
min-height: 1486px;

h2 {
font-weight: 600;
font-size: 48px;
color: #000;
}
@media (max-width: 1439px){
min-height: 1379px;
h2 {
font-weight: 600;
font-size: 36px;
}
}
@media (max-width: 743px){
min-height: 1166px;
h2{
font-weight: 600;
font-size: 24px;
}
}

`

const FirstImage = styled.img`
position:absolute;
left:-24px;

@media (max-width: 1439px){
left: -262px;
top: -2px;
height: 820px;
}
@media (max-width: 743px){
left: -140px;
top: 182px;
height: 340px;
}
`

const SecondImage = styled.img`
position:absolute;
right: -24px;
top: 650px;

@media (max-width: 1439px){
top: 700px;
right: -87px;
width: 449px;
height: 749px;
}
@media (max-width: 743px){
left: 187px;
top: 589px;
width: 116px;
height: 166px;
}



`

const FirstCardList = styled.div`
position: absolute;
left: 530px;
top: 130px;
width: 828px;
height: 301px;


h3{
font-weight: 500;
font-size: 48px;
color: #006837;
margin-bottom: 40px;

display:flex;
align-items:center;
justify-content: flex-start;
gap: 24px;

}
ul{
list-style-type: inherit;
padding-left: 50px;
}

li{
font-weight: 400;
font-size: 24px;
color: #333;
}
@media (max-width: 1439px) {
width: 534px;
height: 314px;

left: 165px;
top: 90px;

h3 {
font-size: 32px;
margin-bottom: 24px;
}

li{
font-size: 20px;
}
}
@media (max-width: 743px){
width: 263px;
height: 319px;

left: 45px;
top: 90px;

h3 {
font-size: 20px;
margin-bottom: 16px;
gap: 20px;

svg{
width: 32px;
height: 32px;
}
}

ul{
padding-left: 25px;
}

li{
font-size: 14px;
}
}


`

const SecondCardList = styled.div`
position: absolute;
right: 120px;
top: 530px;
width: 620px;
height: 214px;


h3{
font-weight: 500;
font-size: 48px;
color: #006837;
margin-bottom: 40px;

display:flex;
align-items:center;
justify-content: flex-start;
gap:24px;

}
ul{
list-style-type: inherit;
padding-left: 50px;
}

li{
font-weight: 400;
font-size: 24px;
color: #333;
}

@media (max-width: 1439px) {
width: 446px;
height: 170px;

right: -17px;
top: 448px;

h3 {
font-size: 32px;
margin-bottom: 24px;
}

li{
font-size: 20px;
}
}

@media (max-width: 743px){
width: 263px;


right: -25px;
top: 424px;

h3 {
font-size: 20px;
margin-bottom: 16px;
gap: 20px;

svg{
width: 32px;
height: 32px;
}
}
ul{
padding-left: 25px;
}
li{
font-size: 14px;
}
}
`

const ThirdCardList = styled.div`
position: absolute;
right: 245px;
top: 815px;
width: 606px;
height: 243px;


h3{
font-weight: 500;
font-size: 48px;
color: #006837;
margin-bottom: 40px;

display:flex;
align-items:center;
justify-content: flex-start;
gap:24px;
}
ul{
list-style-type: inherit;
padding-left: 50px;
}

li{
font-weight: 400;
font-size: 24px;
color: #333;
}

@media (max-width: 1439px) {
width: 534px;

right: 25px;
top: 650px;

h3 {
font-size: 32px;
margin-bottom: 24px;
}

li{
font-size: 20px;
}
}
@media (max-width: 743px){
width: 263px;
height: 319px;

right: 33px;
top: 620px;

h3 {
font-size: 20px;
margin-bottom: 16px;
gap: 20px;

svg{
width: 32px;
height: 32px;
}
}
ul{
padding-left: 25px;
}
li{
font-size: 14px;
}
}
`

const FourthCardList = styled.div`
position: absolute;
left: 37px;
bottom: 250px;
width: 723px;
height: 185px;


h3{
font-weight: 500;
font-size: 48px;
color: #006837;
margin-bottom: 40px;

display:flex;
align-items:center;
justify-content: flex-start;
gap:24px;

}
ul{
list-style-type: inherit;
padding-left: 50px;
}

li{
font-weight: 400;
font-size: 24px;
color: #333;
}
@media (max-width: 1439px) {
width: 534px;

left: 0px;
top: 870px;

h3 {
font-size: 32px;
margin-bottom: 24px;
}

li{
font-size: 20px;
}
}

@media (max-width: 743px){
width: 263px;
height: 319px;

left: 0;
top: 840px;

h3 {
font-size: 20px;
margin-bottom: 16px;
gap: 20px;

svg{
width: 32px;
height: 32px;
}
}
ul{
padding-left: 25px;
}
li{
font-size: 14px;
}
}



`

const FifthCardList = styled.div`
position: absolute;
left: 37px;
bottom: 0px;
width: 1018px;
height: 185px;



h3{
font-weight: 500;
font-size: 48px;
color: #006837;
margin-bottom: 40px;

display:flex;
align-items:center;
justify-content: flex-start;
gap:24px;

}
ul{
list-style-type: inherit;
padding-left: 50px;

}

li{
font-weight: 400;
font-size: 24px;
color: #333;
}

@media (max-width: 1439px) {
width: 534px;


left: 0px;
bottom: 110px;

h3 {
font-size: 32px;
margin-bottom: 24px;
}

li{
font-size: 20px;
}
}
@media (max-width: 743px){
width: 263px;


left: 0px;
bottom: -15px;

h3 {
font-size: 20px;
margin-bottom: 16px;
gap: 20px;

svg{
width: 32px;
height: 32px;
}
}
ul{
padding-left: 25px;
}
li{
font-size: 14px;
}
}
`


const BtnLeaveAppl = styled.button`

margin: 60px auto 0 auto;
border:none;
border-radius: 5px;
padding: 20px 24px;
width: 330px;
height: 60px;
box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
background-color: #006837;

font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: -0.02em;
color: #fff;

display: flex;
align-items: center;
justify-content: center;

 &:hover {
        background: #25a02a;
        color: #fff;
    }
@media (max-width: 1439px){
}

@media (max-width: 743px){
  width: 288px;
  height: 60px;
  margin: 24px auto 0;
}

`