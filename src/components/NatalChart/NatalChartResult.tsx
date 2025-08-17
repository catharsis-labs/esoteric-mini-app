import {FC} from "react";
import {Page} from "@/components/Page.tsx";
import {Title} from "@telegram-apps/telegram-ui";

interface NatalChartResultProps {
    result: string;
}

export const NatalChartResult: FC<NatalChartResultProps> = ({result}) => {

    return (
        <Page back={false}>
            <Title>Интерпретация натальной карты</Title>
            <p>{result}</p>
        </Page>
    )
};