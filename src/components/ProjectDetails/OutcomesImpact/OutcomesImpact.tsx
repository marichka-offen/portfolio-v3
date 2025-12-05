import './OutcomesImpact.scss'

interface OutcomesImpactProps {
    outcomes?: {
        metrics?: string[]
        learnings?: string[]
    }
}

export default function OutcomesImpact({ outcomes }: OutcomesImpactProps) {
    if (!outcomes) return null

    return (
        <section className="outcomes-impact">
            <h2 className="outcomes-impact__heading">Outcomes & Impact</h2>

            {outcomes.metrics && outcomes.metrics.length > 0 && (
                <div className="outcomes-impact__metrics">
                    {outcomes.metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="outcomes-impact__metric"
                        >
                            <p className="outcomes-impact__metric-value">{metric}</p>
                        </div>
                    ))}
                </div>
            )}

            {outcomes.learnings && outcomes.learnings.length > 0 && (
                <div className="outcomes-impact__learnings">
                    <h3 className="outcomes-impact__learnings-title">Key Learnings</h3>
                    <ul className="outcomes-impact__learnings-list">
                        {outcomes.learnings.map((learning, index) => (
                            <li key={index} className="outcomes-impact__learning">
                                {learning}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}
