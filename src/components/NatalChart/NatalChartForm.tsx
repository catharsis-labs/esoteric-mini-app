import type {FC} from "react";
import { Page } from "@/components/Page.tsx";
import { Button, Input, Section } from "@telegram-apps/telegram-ui";
import { useState } from "react";

interface BirthData {
    firstName: string;
    lastName: string;
    birthDate: string;
    birthTime: string;
}

interface NatalChartFormProps {
    onSubmit: (data: BirthData) => void;
}

export const NatalChartForm: FC<NatalChartFormProps> = ({ onSubmit }) => {
    const [birthData, setBirthData] = useState<BirthData>({
        firstName: "",
        lastName: "",
        birthDate: "",
        birthTime: "",
    });

const handleInputChange = (field: keyof BirthData, value: string) => {
    setBirthData((prev) => ({
        ...prev,
        [field]: value,
    }));
};

    return (
        <Page back={false}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    height: "60vh",
                    gap: "12px",
                }}
            >
                <Section header="Form section">
                    <Input
                        header="First name"
                        placeholder="Something here"
                        value={birthData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                    <Input
                        header="Surname"
                        placeholder="Something here"
                        value={birthData.lastName}
                        onChange={(e) =>
                            handleInputChange("lastName", e.target.value)}
                    />
                    <Input
                        header="Date of birth"
                        placeholder="Something here"
                        type="date"
                        value={birthData.birthDate}
                        onChange={(e) =>
                            handleInputChange("birthDate", e.target.value)}
                    />
                    <Input
                        header="Time of birth"
                        placeholder="Something here"
                        type="datetime-local"
                        value={birthData.birthTime}
                        onChange={(e) =>
                            handleInputChange("birthTime", e.target.value)}
                    />
                </Section>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    //alignItems: "center",
                    height: "10vh",
                    padding: "0 20px",
                    gap: "12px",
                }}
            >
                <Button
                    style={{ width: "100%" }}
                    className={'dreamButton'}
                    onClick={() => onSubmit(birthData)}
                >Отправить</Button>
            </div>
        </Page>
    );
};