import {FC} from "react";
import {Page} from "@/components/Page.tsx";
import {Title} from "@telegram-apps/telegram-ui";

interface SpreadResultProps {
    result: string;
}

export const SpreadResult: FC<SpreadResultProps> = ({result}) => {

    return (
        <Page back={false}>
            <div>
                <Title>Результат расклада</Title>
                <p>{result}</p>
            </div>
        </Page>
    )
};