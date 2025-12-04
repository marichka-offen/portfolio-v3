import './SkipLink.scss'

interface SkipLinkProps {
    targetId?: string
}

export default function SkipLink({ targetId = 'main-content' }: SkipLinkProps) {
    return (
        <a
            href={`#${targetId}`}
            className="skip-link"
        >
            Skip to main content
        </a>
    )
}