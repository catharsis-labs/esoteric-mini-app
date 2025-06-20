import { useEffect, useState } from "react";


interface TarotCard {
    id: number;
    name: string;
    englishName: string;
    cardSuit: string;
}
const apiUrl = import.meta.env.VITE_API_URL;

export function SpreadPage() {
    const [cards, setCards] = useState<TarotCard[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSpread = async () => {
            try {
                const res = await fetch(`${apiUrl}/api/spread?count=2&deckType=OshoZen`);
                if (!res.ok) throw new Error(`Ошибка HTTP: ${res.status}`);
                const data = await res.json();
                setCards(data);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchSpread();
    }, []);

    return (
        <div>
            <h2>Расклад</h2>
            {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        {card.name} ({card.englishName}) — {card.cardSuit}
                    </li>
                ))}
            </ul>
        </div>
    );
}