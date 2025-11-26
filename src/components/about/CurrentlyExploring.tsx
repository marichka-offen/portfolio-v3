interface Exploration {
    technology: string
    purpose: string
}

interface CurrentlyExploringProps {
    explorations: Exploration[]
}

export default function CurrentlyExploring({ explorations }: CurrentlyExploringProps) {
    if (explorations.length === 0) return null

    return (
        <section aria-labelledby="currently-exploring-heading">
            <h2 id="currently-exploring-heading">[SECTION_HEADING]</h2>

            <ul>
                {explorations.map((exploration, index) => (
                    <li key={index}>
                        <strong>{exploration.technology}:</strong> {exploration.purpose}
                    </li>
                ))}
            </ul>
        </section>
    )
}