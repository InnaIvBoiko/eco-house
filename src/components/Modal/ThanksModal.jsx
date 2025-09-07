import { useEffect } from "react";
import styled from "styled-components";

export default function ThanksModal({onClose}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            onClose();
        }, 4000);
        return () => {
            document.body.style.overflow = '';
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <ModalOverlay>
            <ModalContent>
                <span onClick={onClose}>X</span>
                <h2>Дякуємо!</h2>
                <p>Ми зв'яжемося з вами протягом дня</p>
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
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    border-radius: 10px;
    width: 920px;
    height: 400px;
    padding: 24px 24px 96px 24px;
    box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-weight: 600;
        font-size: 64px;
        text-align: center;
        color: #000;
    }

    p {
        font-weight: 600;
        font-size: 46px;
        text-align: center;
        color: #000;
        white-space: nowrap;
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
`;