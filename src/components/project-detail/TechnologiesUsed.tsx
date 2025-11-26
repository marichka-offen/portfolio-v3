import type { TechnologyCategory } from "@/types/project"

interface TechnologiesUsedProps {
    categories: TechnologyCategory[]
    notes?: string
}

export default function TechnologiesUsed({ categories, notes }: TechnologiesUsedProps) {
    return (
        <section aria-labelledby="technologies-used-heading">
            <h2 id="technologies-used-heading">[SECTION_HEADING]</h2>

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

            {notes && (
                <p>
                    <strong>[NOTE_PREFIX]:</strong> {notes}
                </p>
            )}
        </section>
    )
}