import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Donat from '../../components/Sections/Donat';
import Footer from '../../components/Footer/Footer';
import { BtnPrimary } from '../../components/Header/Header';
import IconContactsPageAddress from '../../components/Icons/IconContactsPageAddress';
import IconContactsPageEmail from '../../components/Icons/IconContactsPageEmail';
import IconContactsPagePhone from '../../components/Icons/IconContactsPagePhone';
import IconContactsPageSchedule from '../../components/Icons/IconContactsPageSchedule';
import Accordion from '../../components/Sections/Accordion';
import { range } from '../../utils/breakpoints';
import ThanksModal from '../../components/Modal/ThanksModal';

export default function ContactsPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const validateName = name => {
    setNameError(name.trim().length < 2);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!regex.test(email));
  };

  const [showThanksModal, setShowThanksModal] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = async e => {
    e.preventDefault();
    setIsDisabled(true);

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
    // Clear form fields after submission
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setShowThanksModal(true);
    setTimeout(() => setIsDisabled(false), 5000);
  };

  return (
    <Container>
      <Header />
      <SectionHero>
        <h1>
          <span>Наші</span> контакти
        </h1>
        <HomeImage></HomeImage>
      </SectionHero>
      <SectionContacts>
        <div>
          <h2>Залишилися запитання?</h2>
          <p>Залиште повідомлення і ми обов’язково з Вами зв’яжемося</p>
          <ContactsForm onSubmit={handleSubmit}>
            <ContactsInputWrapper>
              <ContactsLabelInput htmlFor="username">Ім'я</ContactsLabelInput>
              <ContactsInput
                type="text"
                id="username"
                name="username"
                placeholder="Ваше Ім'я"
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={() => validateName(name)}
                style={nameError ? { border: '2px solid red' } : {}}
                required
              ></ContactsInput>
            </ContactsInputWrapper>
            <ContactsInputWrapper>
              <ContactsLabelInput htmlFor="usertel">Телефон</ContactsLabelInput>
              <ContactsInput
                type="tel"
                id="usertel"
                name="usertel"
                placeholder="Ваш телефон"
                value={phone}
                pattern="[0-9+]*"
                inputMode="tel"
                onInput={e => e.target.value = e.target.value.replace(/[^0-9+]/g, '')}
                onChange={e => setPhone(e.target.value)}
                required
              ></ContactsInput>
            </ContactsInputWrapper>
            <ContactsInputWrapper style={{ width: '802px' }}>
              <ContactsLabelInput htmlFor="useremail">Ел. адреса</ContactsLabelInput>
              <ContactsInput
                type="text"
                id="useremail"
                name="useremail"
                placeholder="Ваша ел. адреса"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
                required
                style={emailError ? { border: '2px solid red' } : {}} 
              ></ContactsInput>
            </ContactsInputWrapper>
            <ContactsInputWrapper style={{ height: 'auto' }}>
              <ContactsLabelInput htmlFor="usermessage">Повідомлення (максимум 400 символів)</ContactsLabelInput>
              <ContactsMessage
                name="usermessage"
                id="usermessage"
                placeholder="Ваше повідомлення"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></ContactsMessage>
            </ContactsInputWrapper>
            <BtnPrimary style={{ width: '100%' }} disabled={isDisabled} type='submit'>Надіслати</BtnPrimary>
          </ContactsForm>
        </div>
        <ContactsAddress>
          <AddressList>
            <AddressListItem>
              <IconContactsPageAddress />
              <p>
                Адреса офісу:
                <br /> <span>м. Київ, вул. Зелена, 12</span>
              </p>
            </AddressListItem>
            <AddressListItem>
              <IconContactsPagePhone />
              <p>
                Телефон:
                <br />{' '}
                <span>
                  <a href="tel:+380980000000" style={{ textDecoration: 'none', color: 'currentcolor' }}>
                    +38 (098) 000-00-00
                  </a>
                </span>
              </p>
            </AddressListItem>
            <AddressListItem>
              <IconContactsPageEmail />
              <p>
                Email:
                <br />{' '}
                <span>
                  <a href="mailto:info@econest.ua" style={{ textDecoration: 'none', color: 'currentcolor' }}>
                    info@econest.ua
                  </a>
                </span>
              </p>
            </AddressListItem>
            <AddressListItem>
              <IconContactsPageSchedule />
              <p>
                Графік роботи:
                <br /> <span>Пн – Сб, 9:00 – 18:00</span>
              </p>
            </AddressListItem>
          </AddressList>
        </ContactsAddress>
      </SectionContacts>
      <SectionFAQ>
        <Accordion></Accordion>
      </SectionFAQ>
      <Donat />
      <Footer />
      {showThanksModal && <ThanksModal onClose={() => setShowThanksModal(false)} />}
    </Container>
  );
}
const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

    @media (max-width: 1439px) {
        max-width: 744px;
    }

    @media (max-width: 743px) {
        max-width: 320px;
    }
`;

const SectionHero = styled.section`
  position: relative;
  min-width: 320px;
  max-width: 1440px;
  height: 562px;
  background-image: url('/images/contactsPage/HeroSectionbgMobile.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #000;
    padding-top: 102px;
    span {
      color: #006837;
    }

    @media only screen and ${range.fromDesktop} {
      font-size: 128px;
    }
  }

  @media only screen and ${range.tabletToDesktop} {
    h1 {
      padding-top: 95px;
      font-size: 96px;
      span {
      }
    }
    height: 766px;
    background-image: url('/images/contactsPage/HeroSectionbackgroundTablet.png');
  }

  @media only screen and ${range.fromDesktop} {
    width: 1440px;
    height: 768px;
    height: 768px;
    background-size: cover;
    background-image: url('/images/contactsPage/contactPageHeroBackground.png');
  }
`;

const HomeImage = styled.div`
  position: absolute;
  min-width: 320px;
  max-width: 1440px;
  width: 320px;
  height: 320px;
  top: 101px;
  left: 0;
  border-radius: 12px;
  z-index: 1;
  background-image: unset;

  @media only screen and (width: 744px) {
    background-image: url('/images/contactsPage/HeroSectionHouseMobile.png');
    top: 2px;
    left: 123px;
    width: 437px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media only screen and ${range.fromDesktop} {
    position: absolute;
    width: 1440px;
    top: 101px;
    left: 0;
    border-radius: 12px;
    z-index: 1;
    background-image: url('/images/contactsPage/contactPageHerohouse.png');
  }
`;

const SectionContacts = styled.section`
  font-family: 'Inter', sans-serif;
  padding: 16px;
  display: flex;
  flex-direction: column;
  min-width: 288px;
  justify-content: center;
  align-items: center;
  max-width: 802px;
  margin: 0 auto;

  > div {
    width: 100%;
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    color: #000;
    margin-bottom: 24px;
    max-width: 802px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
    max-width: 802px;
  }

  @media only screen and ${range.tabletToDesktop} {
    form div:first-child {
      width: 48%;
    }

    form textarea {
      width: 100%;
    }

    h2 {
      font-size: 48px;
      margin-bottom: 43px;
    }

    p {
      font-size: 24px;
      margin-bottom: 8px;
    }
  }

  @media only screen and ${range.fromDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1440px;
    height: 846px;
    padding: 60px 24px;
    gap: 118px;

    > div {
      width: 802px;
    }
    h2 {
      font-size: 64px;
      margin-bottom: 24px;
      width: 800px;
    }

    p {
      font-size: 24px;
      margin-bottom: 8px;
    }
  }
`;

const ContactsForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  min-width: 288px;
  max-width: 802px;
  gap: 24px;

  @media only screen and ${range.mobileToTablet} {
    div {
      width: 100%;
    }

    div:last-of-type {
      height: 500px;
    }
  }

  @media only screen and ${range.tabletToDesktop} {
    min-width: 744px;
    div:last-of-type {
      width: 100%;
    }

    & div:nth-child(2) {
      width: 48.7%;
    }
  }
  @media only screen and ${range.fromDesktop} {
    width: 802px;

    #useremail {
      width: 802px;
    }

    #usertel {
      width: 448px;
    }

    label:last-of-type {
      width: 802px;
    }
  }
`;

const ContactsInputWrapper = styled.div`
  min-width: 288px;
  height: 92px;
  display: flex;
  flex-direction: column;

  @media only screen and ${range.fromDesktop} {
    width: 330px;
    height: 92px;
  }
`;

const ContactsLabelInput = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #000;
  margin-bottom: 8px;
`;

const ContactsInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px 24px;
  min-width: 288px;
  height: 60px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #fff;

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #666;
    outline: none;
  }

  @media only screen and ${range.fromDesktop} {
    width: 330px;
    height: 60px;
  }
`;

const ContactsMessage = styled.textarea`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px 24px;
  min-width: 288px;
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

  @media only screen and ${range.fromDesktop} {
    width: 802px;
    height: 224px;
  }
`;

const ContactsAddress = styled.address`
  border-radius: 10px;
  padding: 8px;
  max-width: 472px;
  height: 342px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #fff;
  margin-top: 22px;

  @media only screen and ${range.fromDesktop} {
    padding: 24px;
    height: 362px;
  }
`;

const AddressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 288px;
`;

const AddressListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 288px;
  p {
    margin: 0 0 0 5px;
    font-size: 18px;
    color: #006837;
    font-weight: 500;
    font-style: normal;
    span {
      font-weight: 600;
      color: #000;
    }
  }

  @media only screen and ${range.tabletToDesktop} {
    p {
      display: flex;
      margin: 0 0 0 16px;
      span {
      }
    }
  }
  @media only screen and ${range.fromDesktop} {
    p {
      margin: 0 0 0 16px;
      font-size: 24px;
      color: #006837;
      font-weight: 500;
      font-style: normal;
      span {
        font-weight: 600;
        color: #000;
      }
    }
  }
`;

const SectionFAQ = styled.section`
  padding: 60px 24px;

  h2:first-child {
    font-size: 24px;
    width: 100%;
    text-align: center;
  }

  .accordionbtn {
    display: none;
  }

  .accordionqestion span {
    font-size: 16px;
  }
  .accordionanswer {
    font-size: 16px;
  }

  @media only screen and ${range.tabletToDesktop} {
    height: 760px;
    h2:first-child {
      font-size: 48px;
      width: 656px;
    }
    .accordionbtn {
      display: flex;
    }
    .accordionqestion span {
      font-size: 32px;
    }
    .accordionanswer {
      font-size: 20px;
    }
  }
  @media only screen and ${range.fromDesktop} {
    height: 760px;
    h2:first-child {
      font-size: 64px;
      width: 656px;
    }
    .accordionbtn {
      display: flex;
    }

    .accordionqestion span {
      font-size: 48px;
    }
    .accordionanswer {
      font-size: 24px;
    }
  }
`;
