import styled from "styled-components";
import { FlexSpaceBetween, SectionContent } from "./Advantages";
import IconHomePage1 from "../Icons/IconHomePage1";
import IconHomePage2 from "../Icons/IconHomePage2";
import IconHomePage3 from "../Icons/IconHomePage3";
import IconHomePage4 from "../Icons/IconHomePage4";

export default function WhyImportant() {
    return (
        <Section >
            <FlexSpaceBetween>
                <ContentWrapper>
                    <h2>Чому це важливо</h2>
                    <p>Сотні тисяч українських сімей залишилися без житла через війну.
                        <br />
                        <span>Еко</span>Гніздо ставить перед собою завдання дати їм не тимчасовий прихисток, а справжній сучасний дім — комфортний, енергоефективний та доступний
                        </p>
                        <ul>
                            <li> <IconHomePage1 /> <p><span>Енергоефективність</span> - економія до 50% енергії</p></li>
                            <li> <IconHomePage2 /> <p><span>Мобільність</span> - встановлюється за один тиждень</p></li>
                            <li> <IconHomePage3 /> <p><span>Екологічність</span> - натуральні матеріали та сонячні панелі</p></li>
                            <li> <IconHomePage4 /> <p><span>Доступність</span> - відчутно дешевше за традиційне житло</p></li>
                        </ul>
                <img src="/images/dreamPage/important2.jpg" alt="Чому це важливо" width="782" height="246"/>
                </ContentWrapper>
                <ContentRightWrapper>
                    <img src="/images/dreamPage/important1.jpg" alt="Чому це важливо" width="586" height="686"/>
                    <p><span>Еко</span>Гніздо прагне дати більше, ніж тимчасовий прихисток. Ми створюємо простір, де можна знову відчути затишок, турботу й надію на майбутнє. Наші модульні будинки — це сучасне рішення, яке дозволяє швидко та доступно відбудовувати житло для тих, хто цього найбільше потребує.</p>
                </ContentRightWrapper>
                </FlexSpaceBetween>
        </Section>
    );
}

const Section = styled.section`
    padding: 0 24px;
`; 

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    h2 {
        font-weight: 600;
        font-size: 64px;
        color: #000;
        margin-bottom: 10px;
    }

    p {
    max-width: 782px;
    font-weight: 500;
    font-size: 24px;
    color: #000;
}
    span {
        font-weight: 600;
        color: #006837;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 22px;
        width: 566px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 16px;
`;

const ContentRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    p {
    width: 586px;
    font-weight: 500;
    font-size: 24px;
    color: #000;
}
    span {
        font-weight: 600;
        color: #006837;
    }
`;