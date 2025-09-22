import { useEffect, useState } from 'react';
import { ModalOverlay } from './ThanksModal';
import styled from 'styled-components';
import IconLogoMob from '../Icons/IconLogoMob';
import { BtnPrimary } from "../Header/Header";
import { FlexSpaceBetween } from '../Sections/Advantages';
import { Input } from "../Sections/FormHomePage";

export default function RequestModal({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateName = name => {
    setNameError(name.trim().length < 2);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!regex.test(email));
  };
  
  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('type', 'form2');
    formData.append('name', name.trim());
    formData.append('phone', phone.trim());
    formData.append('email', email.trim());
    formData.append('message', message.trim());

    await fetch(
      'https://script.google.com/macros/s/AKfycbyNA9MQdS6iVOu8dV_d0t4hTzP-kyYbZRMBU5cg-mFA_LOkRxf3kP6Xh-8u_MSVWVHn/exec',
      {
        method: 'POST',
        body: formData,
      }
    );

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      onClose();
    }, 15000);
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
        <form onSubmit={handleSubmit}>
            <FlexSpaceBetween style={{gap: '24px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center'}}>
                <Input
                    type="text"
                    placeholder="Ім&#39;я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => validateName(name)}
                    style={{ width: '100%', ...(nameError ? { border: '2px solid red' } : {}) }}
                    required
                />
                <Input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    pattern="[0-9+]*"
                    inputMode="tel"
                    onInput={e => e.target.value = e.target.value.replace(/[^0-9+]/g, '')}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: '100%' }}
                    required
            />
              <Input
                type="text"
                id="useremail"
                name="useremail"
                placeholder="Ваша ел. адреса"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
                required
                style={{ width: '100%', ...(emailError ? { border: '2px solid red' } : {}) }}
              />
              <ContactsMessage
                name="usermessage"
                id="usermessage"
                placeholder="Ваше повідомлення"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </FlexSpaceBetween>
            <BtnPrimary type="submit" style={{ width: "100%" }}>Надіслати</BtnPrimary>
        </form>

        <p style={{ color: '#006837' }}>Це умовна кнопка для конкурсу</p>
        <p>Ми не виготовляємо будинки, але хочемо показати, як це могло б виглядати насправді</p>

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


const ContactsMessage = styled.textarea`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px 24px;
  width: 100%;
  height: 224px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #fff;
  resize: none;

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #666;
  }
`;
