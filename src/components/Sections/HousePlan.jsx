import { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react"; 


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
                <img src="/images/housePage/housePlan.jpg" alt="Плвн будинку" />
            </PlanSection>

          
        </SectionHousePlan>
    );
}

const SectionHousePlan = styled.div`
padding: 60px 24px;




img {

}
`

const TitleSection = styled.h3`
font-weight: 600;
font-size: 48px;
color: #000;

margin-bottom: 60px;

`

const MainImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 1391px;
    height: 800px;
    object-fit: cover;
    border-radius: 10px;

  }
      .nav-btn {
    position: absolute;
    top: 180%;
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
  filter: brightness(60%);
  transform: scale(1.05);
 
 
}
`;

const PlanSection = styled.div`
display: flex;
gap: 17px;

h3{
font-weight: 600;
font-size: 48px;
color: #000;
}`