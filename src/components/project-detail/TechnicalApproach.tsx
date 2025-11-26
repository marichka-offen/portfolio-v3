import type { TechnicalDecision } from '@/types/project'

interface TechnicalApproachProps {
    decisions: TechnicalDecision[]
}

export default function TechnicalApproach({ decisions }: TechnicalApproachProps) {
    return (
        <section aria-labelledby="technical-approach-heading">
            <h2 id="technical-approach-heading">[SECTION_HEADING]</h2>

            <ul>
                {decisions.map((decision, index) => (
                    <li key={index}>
                        <strong>{decision.decision}</strong>
                        <p>{decision.reasoning}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}