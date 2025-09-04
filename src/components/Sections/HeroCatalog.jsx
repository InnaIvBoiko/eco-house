import styled from 'styled-components';
import { ListItem } from './Hero';
import { FlexSpaceBetween } from './Advantages';

export default function HeroCatalog() {
    return (
        <SectionHero>
            <TextWrap>
                <FlexSpaceBetween>
                    <h2><span>Еко</span></h2>
                    <Text>Сучасні будинки та квартири з енергоефективних матеріалів, у гармонії з природою</Text>
                </FlexSpaceBetween>
              <h2 style={{ marginLeft: '65px' , marginTop: '-20px'}}>гніздо</h2>
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
    }
`;

const TextWrap = styled.div`
    position: absolute;
    width: 622px;
    top: 191px;
    left: 24px;

    h2 {
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 150px;
        leading-trim: NONE;
        line-height: 100%;
        letter-spacing: 0%;
        color: #000000;

        span {
            width: 274px;
            font-weight: 700;
            font-style: Bold;
            color: #006837;
        }
`;

const Text = styled.p`
    width: 336px;
    text-align: left;
    font-size: 24px;
    color: #333333;
    font-weight: 500;
`;

const List = styled.ul`
    position: absolute;
    top: 536px;
    left: 24px;
    width: 220px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

