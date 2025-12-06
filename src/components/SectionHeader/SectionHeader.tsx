import CodeComment from '../CodeComment/CodeComment'
import './SectionHeader.scss'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    comment?: string
    id?: string
    size?: 'major' | 'standard'
}

export default function SectionHeader({ title, subtitle, comment, id, size = 'standard' }: SectionHeaderProps) {
    return (
        <div className="section-header">
            {comment && <CodeComment>{comment}</CodeComment>}
            <h2 id={id} className={`section-header__title section-header__title--${size}`}>
                {title}
            </h2>
            {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
        </div>
    )
}
