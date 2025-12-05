import './TechnicalImplementation.scss'

interface TechnicalImplementationProps {
    achievements?: string[]
}

export default function TechnicalImplementation({ achievements }: TechnicalImplementationProps) {
    if (!achievements || achievements.length === 0) return null

    return (
        <section className="technical-implementation">
            <div className="technical-implementation__container">
                <h2 className="technical-implementation__heading">Implementation Highlights</h2>

                <ul
                    className="technical-implementation__list"
                >
                    {achievements.map((achievement, index) => (
                        <li
                            key={index}
                            className="technical-implementation__item"
                        >
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
