import { CardContainer } from "./styles";
import { CardRepositoriesProps } from "../../../@types/interfaces";


function getCreationDay (created: string) {
    const date = new Date(created);
    const dateNow = new Date();
    const remainder = Math.abs(dateNow.getTime() - date.getTime());

    const days = Math.floor(remainder / (1000 * 3600 * 24));
    const months = Math.floor(days/30);
    const years = Math.floor(days/365);

    if (years >= 1) {
        return `Há ${years} ${years === 1 ? 'ano' : 'anos'}`;
    } else if (months >= 1) {
        return `Há ${months} ${months === 1 ? 'mês' : 'meses'}`;
    } else {
        return `Há ${days} ${days === 1 ? 'dia' : 'dias'}`;
    }
}

export function CardRepositories({title, created, description }: CardRepositoriesProps) {
    const createdAt =  getCreationDay(created);

    return (
        <CardContainer>
            <div>
                <h2>{title}</h2>
                <span>{createdAt}</span>
            </div>
            <p>{description}</p>
        </CardContainer>
    );
}