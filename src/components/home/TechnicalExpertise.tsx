interface TechCategory {
    category: string
    technologies: string[]
}

interface TechnicalExpertiseProps {
    categories: TechCategory[]
}

export default function TechnicalExpertise({ categories }: TechnicalExpertiseProps) {
    return (
        <section aria-labelledby="technical-expertise-heading">
            <h2 id="technical-expertise-heading">[SECTION_HEADING]</h2>

            {categories.map((category) => (
                <div key={category.category}>
                    <h3>{category.category}</h3>
                    <ul>
                        {category.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}