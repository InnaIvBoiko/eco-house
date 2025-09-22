import styled from 'styled-components';
import IconHousePage5 from '../../Icons/IconsHousePage/IconHousePage5';
import IconHousePage6 from '../../Icons/IconsHousePage/IconHousePage6';
import IconHousePage7 from '../../Icons/IconsHousePage/IconHousePage7';
import IconHousePage8 from '../../Icons/IconsHousePage/IconHousePage8';

export default function HouseInfo() {
    return (
        <SectionHouseInfo>
            <InfoPage>
                <List>
                    <ListItem><ContentWrapper><IconHousePage5/>82 м²</ContentWrapper>Площа</ListItem>
                    <ListItem><ContentWrapper><IconHousePage6/>2</ContentWrapper>Кімнати</ListItem>
                    <ListItem><ContentWrapper><IconHousePage7/>2</ContentWrapper>Санвузли</ListItem>
                    <ListItem><ContentWrapper><IconHousePage8 />А++</ContentWrapper>Клас</ListItem>     
                </List>
                <TextPrice>Безкоштовно*</TextPrice>
            </InfoPage>
            <HomePageInfo>
                <Text> <span>БудСвіт Гранд</span> — просторий і сучасний модульний будинок, який поєднує комфорт та енергоефективність. <br />
                    Площа 82 м² дозволяє зручно облаштувати житло для сім’ї або пари, які цінують якість і стиль.
                    <ul>
                        <li>Раціональне планування: дві окремі кімнати, які можна облаштувати як спальні або кабінет і дитячу.</li>
                        <li>Два санвузли: зручно для всієї родини та гостей.</li>
                        <li>Простора вітальня з кухонною зоною: ідеальне місце для сімейного відпочинку чи прийому гостей.</li>
                        <li>Енергоефективність класу A++: значна економія на опаленні та охолодженні.</li>
                        <li>Екологічні матеріали: безпечні для здоров’я та природи.</li>
                        <li>Швидкий монтаж: встановлення займає всього кілька днів.</li>
                    </ul>
                
                    Ідеальний вибір як постійне житло для сім’ї або комфортний заміський дім.
                </Text>
            </HomePageInfo>
        </SectionHouseInfo>
    );
};

const SectionHouseInfo = styled.section`
    width: 1440px;
    background-color: inherit;
  
    @media (max-width: 1439px) {
        width: 744px;
    }

    @media (max-width: 743px){
        width: 320px;
    }
`;

const InfoPage = styled.div`
    padding: 64px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1439px) {
        display: block;
        padding: 46px 9px 30px 9px;
    }

    @media (max-width: 743px){
        padding: 24px 26px 35px 26px;
    }
`;

const Text = styled.div`
    font-weight: 500;
    font-size: 24px;
    color: #333;
    padding: 0 24px;

    span {
        color: #006837;
    }

    ul {
        padding: 25px 24px;
        list-style-type: inherit;
    }

    @media (max-width: 743px) {
        font-weight: 500;
        font-size: 18px;
        padding: 0 16px;
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap:64px;

    @media (max-width: 1439px) {
        gap: 54px;
        margin-bottom: 46px;
    }

    @media (max-width: 743px){
        flex-wrap: wrap;
        gap: 40px;
        margin-bottom: 24px;
    }
`;

const ListItem = styled.li`
    font-weight: 400;
    font-size: 36px;
    color: #333;

    @media (max-width: 1439px) {
        font-weight: 400;
        font-size: 32px;
    }

    @media (max-width: 743px){
        font-weight: 400;
        font-size: 24px;
        width: calc((100% - 40px) / 2);
    }  
`;

const ContentWrapper = styled.div`
    font-weight: 500;
    font-size: 36px;
    color: #000;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 4px;


    @media (max-width: 1439px) {
        font-weight: 500;
        font-size: 36px;
    }

    @media (max-width: 743px) {
        font-weight: 500;
        font-size: 24px;
    }
`;

const HomePageInfo = styled.div`
    display: flex;
`;

const TextPrice = styled.p`
    font-weight: 600;
    font-size: 64px;
    letter-spacing: -0.02em;
    color: #000;
    font-family: "Inter", sans-serif;

    @media (max-width: 1439px) {
        font-weight: 600;
        font-size: 48px;
        text-align: right;

        padding-right: 17px;
    }

    @media (max-width: 743px) {
        font-weight: 600;
        font-size: 24px;
        padding-right: 0px;
    }
`;