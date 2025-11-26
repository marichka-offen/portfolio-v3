interface ProjectHeaderProps {
    name: string
    summary: string
    role: string
    timeline: string
    status?: string
}

export default function ProjectHeader({
    name,
    summary,
    role,
    timeline,
    status
}: ProjectHeaderProps) {
    return (
        <header>
            <h1>{name}</h1>
            <p>{summary}</p>

            <dl>
                <dt>Role:</dt>
                <dd>{role}</dd>

                <dt>Timeline:</dt>
                <dd>{timeline}</dd>

                {status && (
                    <>
                        <dt>Status:</dt>
                        <dd>{status}</dd>
                    </>
                )}
            </dl>
        </header>
    )
}