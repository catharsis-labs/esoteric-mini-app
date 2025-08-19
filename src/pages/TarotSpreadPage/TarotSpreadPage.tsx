import {FC, useState} from 'react';
import { Page } from '@/components/Page.tsx';
import { CardSelector } from '@/components/TarotSpread/CardSelector.tsx';
import {ProgressBar} from "@/components/ProgressBar/ProgressBar.tsx";
import {SpreadResult} from "@/components/TarotSpread/SpreadResult.tsx";

enum DeckType
{
    RiderWaite,
    OshoZen,
    Oppositions,
    Thoth
}

enum SpreadType {
    YesNo,
    Faith,
    Relationship,
    Reflection,
    Wealth,
    Week
}

export const TarotSpreadPage: FC = () => {
    const handleCardSelect = (cardSlide: string) => {
        console.log(`Selected card: ${cardSlide}`);
        // Здесь можно добавить логику обработки выбора карты
    };

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
            setResult(`Результат расклада: "${inputText}"`);
            setProgress(100);
        } finally {
            clearInterval(interval);
            setLoading(false);
        }
    };

    return (
        <Page back={false}>
            {!loading && !result && (<CardSelector
                onSelect={handleCardSelect}
                onSubmit={handleSubmit}
                deck={DeckType.RiderWaite}
                cardCount={3}
                spreadType={SpreadType.Faith} />)}
            {loading && <ProgressBar progress={progress} />}
            {!loading && result && <SpreadResult result={result} />}
        </Page>
    );
};
