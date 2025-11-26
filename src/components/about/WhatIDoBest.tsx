interface Competency {
    skill: string
    context?: string
}

interface WhatIDoBestProps {
    competencies: Competency[]
}

export default function WhatIDoBest({ competencies }: WhatIDoBestProps) {
    return (
        <section aria-labelledby="what-i-do-best-heading">
            <h2 id="what-i-do-best-heading">[SECTION_HEADING]</h2>

            <ul>
                {competencies.map((competency, index) => (
                    <li key={index}>
                        <strong>{competency.skill}</strong>
                        {competency.context && <p>{competency.context}</p>}
                    </li>
                ))}
            </ul>
        </section>
    )
}