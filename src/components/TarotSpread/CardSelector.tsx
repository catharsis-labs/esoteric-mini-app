import {FC, useEffect, useState} from "react";
import { Page } from "@/components/Page.tsx";
import {Text} from "@telegram-apps/telegram-ui"; // Для текста заголовка
import {Swiper, SwiperSlide} from "swiper/react";
import cardSelectorStyles from "./CardSelector.module.css";
import {EffectCards} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Swiper.css';

enum DeckType {
    RiderWaite,
    OshoZen,
    Oppositions,
    Thoth,
}

enum SpreadType {
    YesNo,
    Faith,
    Relationship,
    Reflection,
    Wealth,
    Week,
}

type Card = { id: string; title: string; color: string };

interface CardSelectorProps {
    onSelect: (cardSlide: string) => void;
    onSubmit: (response: string) => void;
    deck: DeckType;
    cardCount: number;
    spreadType: SpreadType;
}

export const CardSelector: FC<CardSelectorProps> = ({ onSelect, onSubmit, deck, cardCount }) => {
    const [slides, setSlides] = useState<Card[]>([]);
    const [removingId, setRemovingId] = useState<string | null>(null);
    const [cardsTaken, setCardsTaken] = useState(0);

    const isRemoving = removingId !== null;

    useEffect(() => {
        const palette = [
            "#ce1111","#008cff","#0ab86f","#d37a07","#76a30c",
            "#b40a2f","#236313","#0044ff","#da0cda","#365e4d"
        ];
        const initial: Card[] = Array.from({ length: 9 }, (_, i) => ({
            id: `${Date.now()}_${i}`,   // стабильный ключ
            title: `Slide ${i + 1}`,
            color: palette[i % palette.length],
        }));
        setSlides(initial.slice(0, Math.max(1, 9)));
    }, [9]);

    const handlePick = (activeIndex: number) => {
        if (isRemoving) return; // не даём выбрать вторую, пока первая уходит
        const card = slides[activeIndex];
        if (!card) return;

        onSelect(card.title);
        setRemovingId(card.id); // запускаем анимацию ухода
    };

    const handleTransitionEnd = (id: string, prop: string) => {
        if (prop !== "opacity" || removingId !== id) return;

        setSlides(prev => prev.filter(s => s.id !== id));
        setRemovingId(null);
        setCardsTaken(prev => prev + 1);
    };

    const handleSubmit = () => {
        if (cardsTaken + 1 >= cardCount) onSubmit("Have a nice night"); // наверное старое значение лежит и обновляется в другой момент какой-то поэтому useState старый и надо +1 плюсовать
        return;
    };

    return (
        <Page back={false}>
            <div className={cardSelectorStyles.container}>
                <Text weight="2" size={18}>{DeckType[deck]}</Text>
                <Text size={14}>Choose card</Text>
                <Text size={12}>Tap the active card to select</Text>
            </div>

            <Swiper
                effect="cards"
                grabCursor
                modules={[EffectCards]}
                className="mySwiper"
                onClick={(swiper) => handlePick(swiper.activeIndex)}
                allowTouchMove={!isRemoving}
                observer
                observeParents
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={`card ${removingId === slide.id ? "card--removing" : ""}`}
                            style={{ backgroundColor: slide.color }}
                            onTransitionEnd={(e) => {
                                handleTransitionEnd(slide.id, e.propertyName);
                                handleSubmit();
                            }
                        }
                        >
                            {slide.title}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Page>
    );
};