import type {FC} from "react";
import { Page } from "@/components/Page.tsx";
import { Button, Input } from "@telegram-apps/telegram-ui";
import { useState } from "react";

interface DreamInterpreterInputProps {
    onSubmit: (text: string) => void;
}

export const DreamInterpreterInput: FC<DreamInterpreterInputProps> = ({ onSubmit }) => {
    const [text, setText] = useState('');

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
                <Input
                    style={{ width: "100%" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Опишите свой сон"
                />
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
                    onClick={() => onSubmit(text)}
                >Отправить</Button>
            </div>
        </Page>
    );
};