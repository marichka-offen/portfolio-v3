import type { FactData } from "@/types"
import "./Fact.scss"
import Tag from "../Tag/Tag"
import ImageLoader from "../ImageLoader/ImageLoader"

const factImageSizes = '(max-width: 768px) 70vw, 220px'

export default function Fact(fact: FactData) {
    const { title, description, image, tag } = fact

    return (
        <li className="fact">
            <div className="fact__image-container">
                <Tag>{tag}</Tag>
                <ImageLoader
                    image={image}
                    sizes={factImageSizes}
                    alt={`${title} illustration`}
                    imgClassName="fact__image"
                    wrapperClassName="fact__image-loader"
                />
            </div>
            <h3 className="fact__title">{title}</h3>
            <p className="fact__description">{description}</p>
        </li>
    )
}
