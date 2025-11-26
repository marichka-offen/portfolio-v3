import type { TechnicalAchievement } from '@/types/project'

interface TechnicalImplementationProps {
    achievements: TechnicalAchievement[]
    coreTechnologies?: { tech: string; usage: string }[]
}

export default function TechnicalImplementation({
    achievements,
    coreTechnologies
}: TechnicalImplementationProps) {
    return (
        <section aria-labelledby="technical-implementation-heading">
            <h2 id="technical-implementation-heading">[SECTION_HEADING]</h2>

            {coreTechnologies && (
                <>
                    <h3>[CORE_TECHNOLOGIES_SUBHEADING]</h3>
                    <dl>
                        {coreTechnologies.map((tech, index) => (
                            <div key={index}>
                                <dt>{tech.tech}:</dt>
                                <dd>{tech.usage}</dd>
                            </div>
                        ))}
                    </dl>
                </>
            )}

            <h3>[KEY_ACHIEVEMENTS_SUBHEADING]</h3>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>
                        <strong>{achievement.achievement}</strong>
                        <p>{achievement.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}