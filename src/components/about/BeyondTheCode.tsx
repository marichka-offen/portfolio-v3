interface Activity {
    type: string
    title: string
    url: string
}

interface BeyondTheCodeProps {
    activities: Activity[]
}

export default function BeyondTheCode({ activities }: BeyondTheCodeProps) {
    if (activities.length === 0) return null

    return (
        <section aria-labelledby="beyond-code-heading">
            <h2 id="beyond-code-heading">[SECTION_HEADING]</h2>

            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>
                        <strong>{activity.type}:</strong>{' '}
                        <a
                            href={activity.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {activity.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}