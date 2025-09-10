import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MenuModal({ onClose }) {
    
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            onClose();
        }, 10000);
        return () => {
            document.body.style.overflow = '';
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <ModalOverlay>
            <ModalContent>
                <span onClick={onClose}>X</span>
                <NavigationList>
                    <NavigationItem onClick={() => { onClose(); navigate('/')}}>Про нас</NavigationItem>
                    <NavigationItem onClick={() => { onClose(); navigate('/catalog')}}>Каталог будинків</NavigationItem>
                    <NavigationItem onClick={() => { onClose(); navigate('/modular-dream')}}>Модульна мрія</NavigationItem>
                    <NavigationItem onClick={() => { onClose(); navigate('/contacts')}}>Контакти</NavigationItem>
                </NavigationList>
                
            </ModalContent>
        </ModalOverlay>
    )
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(40, 70, 86, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    width: 744px;
    height: 100vh;
    padding: 24px 24px 96px 24px;
    box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
    background: #fff;
    background-image: url('images/homePage/house-tablet.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start

    h2 {
        font-weight: 600;
        font-size: 64px;
        text-align: center;
        color: #000;
    }

    span {
            margin-left: auto;
            cursor: pointer;
            background: #000000;
            width: 48px;
            height: 48px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #fff;
        }
    }

    media (max-width: 767px) {
        width: 320px;
        background-image: url('images/homePage/house-mobile.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }   
`;

const NavigationList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const NavigationItem = styled.li`
    li:hover {
        cursor: pointer;
        color: #0D6511;
        text-decoration: underline;
    }
`;