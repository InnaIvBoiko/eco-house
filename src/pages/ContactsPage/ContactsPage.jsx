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

export default function ContactsPage() {
  return (
    <Container>
      <Header />
      <SectionHero>
        <h1>
          <span>Наші</span> контакти
        </h1>
        <HomeImage>
          <img src="/images/contactsPage/contactPageHerohouse.png" alt="" />
        </HomeImage>
      </SectionHero>
      <SectionContacts>
        <div style={{ width: '802px' }}>
          <h2 style={{ width: '800px' }}>Залишилися запитання?</h2>
          <p style={{ width: '800px' }}>Залиште повідомлення і ми обов’язково з Вами зв’яжемося</p>
          <ContactsForm>
            <ContactsInputWrapper>
              <ContactsLabelInput for="username">Ім'я</ContactsLabelInput>
              <ContactsInput type="text" id="username" name="username" placeholder="Ваше Ім'я"></ContactsInput>
            </ContactsInputWrapper>
            <ContactsInputWrapper>
              <ContactsLabelInput for="usertel">Телефон</ContactsLabelInput>
              <ContactsInput
                style={{ width: '448px' }}
                type="text"
                id="usertel"
                name="usertel"
                placeholder="Ваше телефон"
              ></ContactsInput>
            </ContactsInputWrapper>
            <ContactsInputWrapper style={{ width: '802px' }}>
              <ContactsLabelInput for="useremail">Ел. адреса</ContactsLabelInput>
              <ContactsInput
                style={{ width: '802px' }}
                type="text"
                id="useremail"
                name="useremail"
                placeholder="Ваше ел. адреса"
              ></ContactsInput>
            </ContactsInputWrapper>
            <ContactsInputWrapper style={{ width: 'auto', height: 'auto' }}>
              <ContactsLabelInput style={{ width: '802px' }} for="usermessage">
                Повідомлення (максимум 400 символів)
              </ContactsLabelInput>
              <ContactsMessage name="usermessage" id="usermessage" placeholder="Ваше повідомлення"></ContactsMessage>
            </ContactsInputWrapper>
            <BtnPrimary style={{ width: '100%' }}>Надіслати</BtnPrimary>
          </ContactsForm>
        </div>
        <div style={{ width: '472px' }}>
          <ContactsAddress>
            <AddressList>
              <AddressListItem>
                <IconContactsPageAddress />
                <p style={{ margin: '0 0 0 16px' }}>
                  Адреса офісу:
                  <br /> <span>м. Київ, вул. Зелена, 12</span>
                </p>
              </AddressListItem>
              <AddressListItem>
                <IconContactsPagePhone />
                <p style={{ margin: '0 0 0 16px' }}>
                  Телефон:
                  <br /> <span>+38 (098) 000-00-00</span>
                </p>
              </AddressListItem>
              <AddressListItem>
                <IconContactsPageEmail />
                <p style={{ margin: '0 0 0 16px' }}>
                  Email:
                  <br /> <span>info@econest.ua</span>
                </p>
              </AddressListItem>
              <AddressListItem>
                <IconContactsPageSchedule />
                <p style={{ margin: '0 0 0 16px' }}>
                  Графік роботи:
                  <br /> <span>Пн – Сб, 9:00 – 18:00</span>
                </p>
              </AddressListItem>
            </AddressList>
          </ContactsAddress>
        </div>
      </SectionContacts>
      <SectionFAQ>
        <Accordion></Accordion>
      </SectionFAQ>
      <Donat />
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionHero = styled.section`
  position: relative;
  width: 1440px;
  height: 768px;
  background-image: url('/images/contactsPage/contactPageHeroBackground.png');
  background-size: cover;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 128px;
    color: #000;
    padding-top: 102px;

    span {
      font-weight: 700;
      font-style: Bold;
      color: #006837;
    }
  }
`;

const HomeImage = styled.div`
  position: absolute;
  width: 1440px;
  //   height: 768px;
  top: 101px;
  left: 0;
  border-radius: 12px;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const SectionContacts = styled.section`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Inter', sans-serif;
  width: 1440px;
  height: 846px;
  padding: 60px 24px;
  gap: 118px;

  h2 {
    font-weight: 600;
    font-size: 64px;
    color: #000;
    margin-bottom: 24px;
  }

  p {
    font-weight: 500;
    font-size: 24px;
    color: #333;
    margin-bottom: 8px;
  }
`;

const ContactsForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 802px;
  gap: 24px;
`;

const ContactsInputWrapper = styled.div`
  width: 330px;
  height: 92px;
  display: flex;
  flex-direction: column;
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
  width: 330px;
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
  }
`;

const ContactsMessage = styled.textarea`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px 24px;
  width: 802px;
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

const ContactsAddress = styled.address`
  border-radius: 10px;
  padding: 24px;
  width: 472px;
  height: 362px;
  padding: 24px;
  box-shadow: 0 1px 1px 0 rgba(30, 30, 30, 0.15);
  background: #fff;
  margin-top: 22px;
`;

const AddressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const AddressListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: 24px;
    color: #006837;
    font-weight: 500;
    font-style: normal;
    span {
      font-weight: 600;
      color: #000;
    }
  }
`;

const SectionFAQ = styled.section`
  padding: 60px 24px;
  height: 760px;
`;
