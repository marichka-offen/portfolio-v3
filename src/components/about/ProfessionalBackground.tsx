interface Role {
    company: string
    role: string
    period: string
    technologies: string[]
    achievements: string[]
}

interface ProfessionalBackgroundProps {
    roles: Role[]
}

export default function ProfessionalBackground({ roles }: ProfessionalBackgroundProps) {
    return (
        <section aria-labelledby="professional-background-heading">
            <h2 id="professional-background-heading">[SECTION_HEADING]</h2>

            {roles.map((role, index) => (
                <article key={index}>
                    <h3>{role.company}</h3>
                    <p>
                        <strong>{role.role}</strong> | {role.period}
                    </p>
                    <p>
                        <strong>Technologies:</strong> {role.technologies.join(', ')}
                    </p>
                    <ul>
                        {role.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    )
}