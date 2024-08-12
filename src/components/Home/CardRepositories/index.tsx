import { CardContainer } from "./styles"

interface CardRepositoriesProps {
    title: string
    created: string
    description: string
}

export function CardRepositories({title, created, description }: CardRepositoriesProps) {
    return (
        <CardContainer>
            <div>
                <h2>{title}</h2>
                <span>Há 1 dia</span>
            </div>
            <p>{description}</p>
        </CardContainer>
    )
}