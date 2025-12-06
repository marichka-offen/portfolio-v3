import './SectionDivider.scss'

interface SectionDividerProps {
    label?: string
}

export default function SectionDivider({ label }: SectionDividerProps) {
    return (
        <div className="section-divider" role="separator" aria-hidden="true">
            <div className="section-divider__line">
                {label && (
                    <span className="section-divider__label">
                        // ----- {label} -----
                    </span>
                )}
            </div>
        </div>
    )
}
