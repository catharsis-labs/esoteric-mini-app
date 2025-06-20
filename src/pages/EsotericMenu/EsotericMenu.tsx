import { Button } from "@/components/ui/button"

export function EsotericMenu() {
    return (
        <div className="flex flex-col items-center justify-start p-4 pt-6 space-y-6 min-h-[calc(100vh-5rem)]">

            {/* Верхняя панель с балансом и профилем */}
            <div className="w-full flex justify-between items-center px-2">
                <span className="text-lg font-medium">10$</span>
                <div className="flex items-center gap-2">
                    <span className="text-sm">имя</span>
                    <div className="w-8 h-8 rounded-full bg-muted" />
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