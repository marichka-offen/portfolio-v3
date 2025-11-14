import type { FactData } from "@/types"
import "./Fact.scss"

export default function Fact(fact: FactData) {
    const { title, description, imageUrl, tag } = fact
    return (
        <li className="fact">
            <div className="fact__image-container">
                <span className="fact__tag">{tag}</span>
                <img className="fact__image" src={imageUrl} alt="Fun fact image" />
            </div>
            <h3 className="fact__title">{title}</h3>
            <p className="fact__description">{description}</p>
        </li>
    )
}
