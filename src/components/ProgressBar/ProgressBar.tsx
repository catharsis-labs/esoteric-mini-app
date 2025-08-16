import type { FC } from 'react';
import { Progress } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';

interface DreamInterpreterProgressProps {
    progress: number;
}

export const ProgressBar: FC<DreamInterpreterProgressProps> = ({ progress }) => {
    return (
        <Page back={false}>
            <h2>Анализируем ваш сон...</h2>
            <Progress value={progress} />
        </Page>
    );
};
