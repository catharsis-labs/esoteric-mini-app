import {FC, useState} from 'react';

import { Page } from '@/components/Page.tsx';
import {ProgressBar} from "@/components/ProgressBar/ProgressBar.tsx";
import {NatalChartForm} from "@/components/NatalChart/NatalChartForm.tsx";
import {NatalChartResult} from "@/components/NatalChart/NatalChartResult.tsx";

interface BirthData {
    firstName: string;
    lastName: string;
    birthDate: string;
    birthTime: string;
}

export const NatalChartPage: FC = () => {
    const [birthData, setBirthData] = useState<BirthData | null>(null)
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (data: BirthData) => {
        if (!data.firstName || !data.lastName || !data.birthDate || !data.birthTime) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        setBirthData(data);
        console.log(birthData);
        setLoading(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prev) => (prev < 90 ? prev + 10 : prev));
        }, 200);

        try {
            await new Promise((r) => setTimeout(r, 5000));
            const resultText = `Натальная карта для ${data.firstName} ${data.lastName}, дата рождения: ${data.birthDate}, время: ${data.birthTime}`;
            setResult(resultText);
            setProgress(100);
        } finally {
            clearInterval(interval);
            setLoading(false);
        }
    };

    return (
        <Page back={false}>
            {!loading && !result && (<NatalChartForm onSubmit={handleSubmit} />)}
            {loading && <ProgressBar progress={progress} />}
            {!loading && result && <NatalChartResult result={result} />}
        </Page>
    );
};
