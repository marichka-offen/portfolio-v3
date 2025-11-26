import type { ProjectOutcome } from '@/types/project'

interface OutcomesImpactProps {
    outcomes: ProjectOutcome
}

export default function OutcomesImpact({ outcomes }: OutcomesImpactProps) {
    return (
        <section aria-labelledby="outcomes-impact-heading">
            <h2 id="outcomes-impact-heading">[SECTION_HEADING]</h2>

            {outcomes.metrics && outcomes.metrics.length > 0 && (
                <>
                    <h3>[METRICS_SUBHEADING]</h3>
                    <ul>
                        {outcomes.metrics.map((metric, index) => (
                            <li key={index}>{metric}</li>
                        ))}
                    </ul>
                </>
            )}

            <h3>[LEARNING_ITERATION_SUBHEADING]</h3>
            <ul>
                {outcomes.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                ))}
            </ul>
        </section>
    )
}