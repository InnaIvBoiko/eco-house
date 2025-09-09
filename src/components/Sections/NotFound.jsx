import styled from "styled-components";
import { BtnPrimary } from "../Header/Header";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    
    return (
        <Section>
            <h1>404</h1>
            <h2>Сторінку не знайдено</h2>
            <p>Можливо, ви шукали щось інше?</p>
            <ImageLeft />
            <ImageRight />
            <BtnPrimaryStyledWrapper>
                <BtnPrimary onClick={() => navigate("/")} style={{ width: "100%" }}>Повернутися на головну</BtnPrimary>
            </BtnPrimaryStyledWrapper>
        </Section>
    );
}

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-weight: 600;
        font-size: 300px;
        color: #000;
        margin-top: 260px;
        margin-bottom: 24px;
    }

    h2 {
        font-weight: 600;
        font-size: 48px;
        text-align: center;
        color: #000;
        margin-bottom: 24px;
    }

    p {
        font-weight: 500;
        font-size: 36px;
        text-align: center;
        color: #000;
        margin-bottom: 40px;
    }

    @media (max-width: 1439px) {
        h1 {
            font-size: 200px;
            margin-top: 270px;
        }

        h2 {
            font-size: 40px;
        }

        p {
            font-size: 24px;
        }
    }

    @media (max-width: 743px) {
        h1 {
            font-size: 96px;
            margin-top: 180px;
            margin-bottom: 12px;
        }

        h2 {
            font-size: 22px;
            margin-bottom: 12px;
        }

        p {
            font-size: 16px;
            margin-bottom: 12px;
        }
    }
`;

const ImageLeft = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 724px;
    height: 1024px;
    background-image: url('/images/notFoundPage/404-left.png');
    background-size: cover;
    background-position: center;
    z-index: -1;

    @media (max-width: 1439px) {
        width: 553px;
        height: 968px;
        background-image: url('/images/notFoundPage/404-left-tablet.png');
    }
    
    @media (max-width: 743px) {
        top: 80px;
        width: 123px;
        height: 207px;
        background-image: url('/images/notFoundPage/404-left-mobile.png');
    }
`;

const ImageRight = styled.div`
    position: absolute;
    right: 0;
    top: calc(100vh - 772px);
    width: 444px;
    height: 772px;
    background-image: url('/images/notFoundPage/404-right.png'); 
    background-size: cover;
    background-position: center;
    z-index: -1;

    @media (max-width: 1439px) {
        width: 393px;
        height: 756px;
        top: calc(100vh - 756px);
        background-image: url('/images/notFoundPage/404-right-tablet.png');
    }

    @media (max-width: 743px) {
        width: 135px;
        height: 265px;
        top: calc(100vh - 265px);
        background-image: url('/images/notFoundPage/404-right-mobile.png');
    }   
`;

const BtnPrimaryStyledWrapper = styled.div`
    width: 600px;

    @media (max-width: 1439px) {
        width: 446px;
    }

    @media (max-width: 743px) {
        width: 288px;
    }
`;
