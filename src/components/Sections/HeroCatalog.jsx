import styled from 'styled-components';
import { ListItem } from './Hero';
import { FlexSpaceBetween } from './Advantages';

export default function HeroCatalog() {
    return (
        <SectionHero>
            <TextWrap>
                <FlexSpaceBetween>
                    <h2>Еко</h2>
                    <Text>Сучасні будинки та квартири з енергоефективних матеріалів, у гармонії з природою</Text>
                </FlexSpaceBetween>
              <h3>гніздо</h3>
            </TextWrap>
            <List>
                <ListItem>Соціальне житло</ListItem>
                <ListItem>Комфорт</ListItem>
                <ListItem>Еко</ListItem>
                <ListItem>Мобільність</ListItem>
            </List>
        </SectionHero>
    );
}

const SectionHero = styled.section`
    position: relative;
    width: 1440px;
    height: 768px;
    background-image: url('/images/catalogPage/main-bg.jpg');
    background-size: cover;
    
    @media (max-width: 1439px) {
        width: 744px;
        height: 767px;
        background-image: url('/images/catalogPage/main-bg-tablet.jpg');
    }

    @media (max-width: 743px) {
        width: 320px;
        height: 512px;
        background-image: url('/images/catalogPage/main-bg-mobile.jpg');
    }
`;

const TextWrap = styled.div`
    position: absolute;
    width: 622px;
    top: 191px;
    left: 24px;

    h2 {
        font-weight: 700;
        font-style: Bold;
        font-size: 150px;
        color: #006837;
        width: 274px;
    }

    h3 {
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 150px;
        leading-trim: NONE;
        line-height: 100%;
        letter-spacing: 0%;
        color: #000000;
        width: 470px;
        margin-left: 65px;
        margin-top: -20px;
    }

    @media (max-width: 1439px) {
        width: 314px;
        top: 160px;

        h2 {
            font-size: 100px;
            width: 183px;
        }

        h3 {
            font-size: 100px;
            width: 314px;
            margin-left: 0px;
            margin-top: -280px;
        }
    }

    @media (max-width: 743px) {
        width: 160px;
        top: 120px;
        left: 16px;

        h2 {
            font-size: 64px;
            width: 120px;
        }

        h3 {
            font-size: 64px;
            width: 200px;
            margin-left: 0px;
            margin-top: -230px;
        }
    }
`;

const Text = styled.p`
    width: 336px;
    text-align: left;
    font-size: 24px;
    color: #333333;
    font-weight: 500;

    @media (max-width: 1439px) {
        width: 247px;
        font-size: 24px;
        margin-top: 80px;
    }

    @media (max-width: 743px) {
        width: 116px;
        font-size: 13px;
        margin-top: 42px;
    }
`;

const List = styled.ul`
    position: absolute;
    top: 536px;
    left: 24px;
    width: 220px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 1439px) {
        display: none;
    }
`;

