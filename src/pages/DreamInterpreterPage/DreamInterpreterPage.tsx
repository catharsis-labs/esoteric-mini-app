import type { FC } from 'react';
import { useState } from 'react';
import { Page } from '@/components/Page.tsx';
import {DreamInterpreterInput} from "@/components/DreamInterpreter/DreamInterpreterInput.tsx";
import {DreamInterpreterResult} from "@/components/DreamInterpreter/DreamInterpreterResult.tsx";
import {ProgressBar} from "@/components/ProgressBar/ProgressBar.tsx";

export const DreamInterpreterPage: FC = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (inputText: string) => {
        if (inputText.length < 5){
            return;
        }
        setText(inputText);
        console.log(text);
        setLoading(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prev) => (prev < 90 ? prev + 10 : prev));
        }, 200);

        try {
            await new Promise((r) => setTimeout(r, 5000));
            setResult(`Интерпретация сна: "${inputText}"`);
            setProgress(100);
        } finally {
            clearInterval(interval);
            setLoading(false);
        }
    };

    return (
        <Page back={false}>
            {!loading && !result && (
                <DreamInterpreterInput onSubmit={handleSubmit} />
            )}
            {loading && <ProgressBar progress={progress} />}
            {!loading && result && <DreamInterpreterResult result={result} />}
        </Page>
    );
};
