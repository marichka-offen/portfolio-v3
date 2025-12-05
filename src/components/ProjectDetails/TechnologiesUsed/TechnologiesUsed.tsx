import './TechnologiesUsed.scss'

interface TechCategory {
    category: string
    items: string[]
}

interface TechnologiesUsedProps {
    categories?: TechCategory[]
}

export default function TechnologiesUsed({ categories }: TechnologiesUsedProps) {
    if (!categories || categories.length === 0) return null

    return (
        <section className="technologies-used">
            <h2 className="technologies-used__heading">Technologies Used</h2>

            <div
                className="technologies-used__grid"
            >
                {categories.map((category, index) => (
                    <div key={index} className="tech-category">
                        <h3 className="tech-category__name">{category.category}</h3>
                        <ul className="tech-category__list">
                            {category.items.map((item, idx) => (
                                <li key={idx} className="tech-category__item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
