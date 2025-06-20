import { Button } from "@/components/ui/button"
import {
    initDataState as _initDataState,
    initDataRaw as _initDataRaw,
    useSignal,
} from '@telegram-apps/sdk-react';
import {useMemo} from "react";

export function EsotericMenu() {
    const initDataState = useSignal(_initDataState);
    const user = useMemo(() => initDataState?.user, [initDataState]);
    const avatar = user?.photo_url;
    const firstname = user?.first_name;

    return (
        <div className="flex flex-col items-center justify-start p-4 pt-6 space-y-6 min-h-[calc(100vh-5rem)]">

            {/* Верхняя панель с балансом и профилем */}
            <div className="w-full flex justify-between items-center px-2">
                <span className="text-4xl font-medium">10$</span>
                <div className="flex items-center gap-2">
                    <span className="text-4xl flex items-center gap-1">{firstname}</span>
                    {avatar ? (
                        <img
                            src={avatar}
                            alt="avatar"
                            className="w-12 h-12 rounded-full object-cover border"
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-muted" />
                    )}
                </div>
            </div>

            {/* Основные кнопки */}
            <div className="w-full flex flex-col items-center gap-4 mt-6">
                <Button className="w-full text-base py-6 rounded-xl" variant="secondary">
                    Расклады карт
                </Button>
                <Button className="w-full text-base py-6 rounded-xl" variant="secondary">
                    Растолковать сон
                </Button>
                <Button className="w-full text-base py-6 rounded-xl" variant="secondary">
                    Натальная карта
                </Button>
            </div>
        </div>
    )
}