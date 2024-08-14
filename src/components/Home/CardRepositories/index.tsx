import { useEffect, useState } from "react"
import { CardContainer } from "./styles"

interface CardRepositoriesProps {
    title: string
    created: string
    description: string
}

export function CardRepositories({title, created, description }: CardRepositoriesProps) {
    const [createdAt, setCreatedAt] = useState('');

    useEffect(() => {
        const date = new Date(created);
        const dateNow = new Date();
        const remainder = Math.abs(dateNow.getTime() - date.getTime());

        const days = Math.ceil(remainder / (1000 * 3600 * 24));
        const months = Math.floor(days/30);
        const years = Math.floor(days/365);

        if (years >= 1) {
            setCreatedAt(`Há ${years} ${years === 1 ? 'ano' : 'anos'}`);
        } else if (months >= 1) {
            setCreatedAt(`Há ${months} ${months === 1 ? 'mês' : 'meses'}`);
        } else {
            setCreatedAt(`Há ${days} ${days === 1 ? 'dia' : 'dias'}`);
        }
        
    },[created])

    return (
        <CardContainer>
            <div>
                <h2>{title}</h2>
                <span>{createdAt}</span>
            </div>
            <p>{description}</p>
        </CardContainer>
    )
}