import type {FC} from "react";
import { Page } from "@/components/Page.tsx";
import { Button, Input } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import dreamStyles from "./DreamInterpreter.module.css";

interface DreamInterpreterInputProps {
    onSubmit: (text: string) => void;
}

export const DreamInterpreterInput: FC<DreamInterpreterInputProps> = ({ onSubmit }) => {
    const [text, setText] = useState('');

    return (
        <Page back={false}>
            <div className={dreamStyles.dreamInput}>
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Опишите свой сон"
                />
            </div>
            <div className={dreamStyles.dreamButton}>
                <Button
                    onClick={() => onSubmit(text)}
                >Отправить</Button>
            </div>
        </Page>
    );
};