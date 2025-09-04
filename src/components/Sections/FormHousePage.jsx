import { BtnPrimary } from "../Header/Header";
import { FlexSpaceBetween } from "./Advantages";
import { Input, SectionForm, TextContainer } from "./FormHomePage";

export default function FormHousePage() {
    return (
        <SectionForm>
            <TextContainer>
                <h2>Безкоштовна консультація</h2>
                <h3>Надамо відповіді на усі запитання</h3>
            </TextContainer>
            <form>
                <FlexSpaceBetween style={{gap: '24px', marginBottom: '40px'}}>
                    <Input type="text" placeholder="Ім’я" />
                    <Input type="tel" placeholder="Телефон" />
                </FlexSpaceBetween>
                <BtnPrimary type="submit" style={{ width: "100%" }}>Надіслати</BtnPrimary>
            </form>
        </SectionForm>
    );
}
