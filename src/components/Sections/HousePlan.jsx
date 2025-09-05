import { useState } from "react";
import styled from "styled-components";


export default function HousePlan() {
  const images = [
    { src: "/images/housePage/Compact1.jpg", alt: "Вид спереду" },
    { src: "/images/housePage/Compact2.jpg", alt: "Бічний фасад" },
    { src: "/images/housePage/Compact3.jpg", alt: "Задній фасад" },
  ];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
        <SectionHousePlan>
            <TitleSection>
                Атмосфера будинку
            </TitleSection>
            <MainImage>
                <img src={selectedImage.src} alt={selectedImage.alt} />
            </MainImage>
            <Thumbnails>
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        onClick={() => setSelectedImage(img)}
                        className={img.src === selectedImage.src ? "active" : ""}
                    />))}
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
`;


const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  img {
    border-radius: 10px;
    width: 448px;
    height: 320px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  img:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  img.active {
    opacity: 1;
    border: 3px solid #0077ff;
  }
`;

const PlanSection = styled.div`
display: flex;
gap: 17px;

h3{
font-weight: 600;
font-size: 48px;
color: #000;
}

`