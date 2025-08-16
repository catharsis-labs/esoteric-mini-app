import {FC} from "react";
import {Page} from "@/components/Page.tsx";

interface DreamInterpreterResultComponentProps {
    result: string;
}

export const DreamInterpreterResult: FC<DreamInterpreterResultComponentProps> = ({result}) => {

    return (
        <Page back={false}>
            <h2>Результат интерпретации сна</h2>
            <p>{result}</p>
        </Page>
    )
};