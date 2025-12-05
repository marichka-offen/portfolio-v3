import './ProjectHeader.scss'

interface ProjectHeaderProps {
    name: string
    summary: string
    role?: string
    timeline?: string
    status?: string
}

export default function ProjectHeader({
    name,
    summary,
    role,
    timeline,
    status,
}: ProjectHeaderProps) {
    return (
        <header
            className="project-header"
        >
            <h1 className="project-header__title">
                {name}
            </h1>

            <p className="project-header__summary">
                {summary}
            </p>

            <div className="project-header__meta">
                {role && (
                    <div className="project-header__meta-item">
                        <span className="project-header__meta-label">Role</span>
                        <span className="project-header__meta-value">{role}</span>
                    </div>
                )}

                {timeline && (
                    <div className="project-header__meta-item">
                        <span className="project-header__meta-label">Timeline</span>
                        <span className="project-header__meta-value">{timeline}</span>
                    </div>
                )}

                {status && (
                    <div className="project-header__meta-item">
                        <span className="project-header__meta-label">Status</span>
                        <span className="project-header__status">{status}</span>
                    </div>
                )}
            </div>
        </header>
    )
}
