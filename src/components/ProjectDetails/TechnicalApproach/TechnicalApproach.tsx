import './TechnicalApproach.scss'

interface Decision {
    decision: string
    rationale: string
}

interface TechnicalApproachProps {
    decisions?: Decision[]
}

export default function TechnicalApproach({ decisions }: TechnicalApproachProps) {
    if (!decisions || decisions.length === 0) return null

    return (
        <section className="technical-approach">
            <h2 className="technical-approach__heading">Technical Approach</h2>

            <ul
                className="technical-approach__list"
            >
                {decisions.map((decision, index) => (
                    <li key={index} className="technical-approach__item">
                        <h3 className="technical-approach__decision">{decision.decision}</h3>
                        <p className="technical-approach__rationale">{decision.rationale}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
