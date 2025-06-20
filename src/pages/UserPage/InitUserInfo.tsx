import {useEffect, useMemo, useState} from 'react';
import {
    initDataState as _initDataState,
    initDataRaw as _initDataRaw,
    useSignal,
} from '@telegram-apps/sdk-react';

import { Page } from '@/components/Page.tsx';
import { List, Placeholder } from '@telegram-apps/telegram-ui';

const apiUrl = import.meta.env.VITE_API_URL;

export function InitUserInfo() {
    const initDataState = useSignal(_initDataState);
    const initDataRaw = useSignal(_initDataRaw)

    const [status, setStatus] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchVerify = async () => {
            try {
                const res = await fetch(`${apiUrl}/api/auth/verify`,  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ initData: initDataRaw }),
                });
                if (!res.ok) throw new Error(`Ошибка HTTP: ${res.status}`);
                setStatus(res.status);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchVerify();
    }, []);

    const user = useMemo(() => initDataState?.user, [initDataState]);

    if (!user) {
        return (
            <Page>
                <Placeholder
                    header="Нет данных о пользователе"
                    description="Telegram не передал initData.user"
                />
            </Page>
        );
    }

    return (
        <Page>
            <List title="Пользователь Telegram">
                {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
                {status && <p style={{ color: "blue" }}>Code: {status}</p>}
                <p title="ID">{user.id}</p>
                <p title="Имя">{user.first_name}</p>
                {user.last_name && <p title="Фамилия">{user.last_name}</p>}
                {user.username && <p title="Username">@{user.username}</p>}
                <p title="Язык">{user.language_code}</p>
                {user.is_premium && <p title="Премиум">Да ✅</p>}
            </List>
        </Page>
    );
}