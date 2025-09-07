import { useState } from "react";
import { BtnPrimary } from "../Header/Header";
import { FlexSpaceBetween } from "./Advantages";
import { Input, SectionForm, TextContainer } from "./FormHomePage";

export default function FormHousePage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append("type", "form1");
        formData.append("name", name);
        formData.append("phone", phone);

        await fetch("https://script.google.com/macros/s/AKfycbyNA9MQdS6iVOu8dV_d0t4hTzP-kyYbZRMBU5cg-mFA_LOkRxf3kP6Xh-8u_MSVWVHn/exec", {
            method: "POST",
            body: formData,
        });

        alert("Inviato con successo!");
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
                    <Input type="text" placeholder="Ім&#39;я" value={name} onChange={(e) => setName(e.target.value.trim())} />
                    <Input type="tel" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value.trim())} />
                </FlexSpaceBetween>
                <BtnPrimary type="submit" style={{ width: "100%" }}>Надіслати</BtnPrimary>
            </form>
        </SectionForm>
    );
}
