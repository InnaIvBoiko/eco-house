import { useEffect } from 'react';
import { ModalOverlay } from './ThanksModal';
import styled from 'styled-components';
import IconLogoMob from '../Icons/IconLogoMob';

export default function DonationModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <ModalOverlay>
      <ModalContent>
        <span onClick={onClose}>X</span>
        <div className="modalIconWrapper">
          <IconLogoMob />
        </div>

        <p style={{ color: '#006837' }}>Це умовна кнопка для конкурсу</p>
        <p>Ми не збираємо кошти, але хочемо показати, як це могло б виглядати насправді</p>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalContent = styled.div`
  border-radius: 10px;
  width: 920px;
  padding: 24px 24px 120px 24px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 40px;

  p {
    font-weight: 600;
    font-size: 36px;
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

  .modalIconWrapper {
    align-self: center;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    padding: 24px 16px 80px 16px;

    p {
      font-size: 24px;
      white-space: normal;
    }
  }
`;
