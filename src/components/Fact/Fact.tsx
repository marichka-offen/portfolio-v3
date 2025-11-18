import type { FactData } from "@/types"
import "./Fact.scss"
import Tag from "../Tag/Tag"

const factImageSizes = '(max-width: 768px) 70vw, 220px'

export default function Fact(fact: FactData) {
    const { title, description, image, tag } = fact
    const factImageSources = Object.entries(image.sources)

    return (
        <li className="fact">
            <div className="fact__image-container">
                <Tag>{tag}</Tag>
                <picture>
                    {factImageSources.map(([format, srcSet]) => (
                        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={factImageSizes} />
                    ))}
                    <img
                        className="fact__image"
                        src={image.img.src}
                        width={image.img.w}
                        height={image.img.h}
                        alt={`${title} illustration`}
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
            </div>
            <h3 className="fact__title">{title}</h3>
            <p className="fact__description">{description}</p>
        </li>
    )
}
