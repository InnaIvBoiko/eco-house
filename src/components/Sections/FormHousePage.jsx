import { useState } from "react";
import { BtnPrimary } from "../Header/Header";
import { FlexSpaceBetween } from "./Advantages";
import { Input, SectionForm, TextContainer } from "./FormHomePage";

export default function FormHousePage({ setShowThanksModal }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [nameError, setNameError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const validateName = name => {
        setNameError(name.trim().length < 2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);

        const formData = new URLSearchParams();
        formData.append("type", "form1");
        formData.append("name", name.trim());
        formData.append("phone", phone.trim());

        await fetch("https://script.google.com/macros/s/AKfycbyNA9MQdS6iVOu8dV_d0t4hTzP-kyYbZRMBU5cg-mFA_LOkRxf3kP6Xh-8u_MSVWVHn/exec", {
            method: "POST",
            body: formData,
        });
        
        setShowThanksModal(true);
        setName("");
        setPhone("");
    };

    return (
        <SectionForm>
            <TextContainer>
                <h2>Безкоштовна консультація</h2>
                <h3>Надамо відповіді на усі запитання</h3>
            </TextContainer>
            <form onSubmit={handleSubmit}>
                <FlexSpaceBetween style={{gap: '24px', marginBottom: '40px'}}>
                    <Input
                        type="text"
                        placeholder="Ім&#39;я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => validateName(name)}
                        style={nameError ? { border: '2px solid red' } : {}}
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
                        required
                    />
                </FlexSpaceBetween>
                <BtnPrimary type="submit" style={{ width: "100%" }} disabled={isDisabled}>Надіслати</BtnPrimary>
            </form>
        </SectionForm>
    );
}
