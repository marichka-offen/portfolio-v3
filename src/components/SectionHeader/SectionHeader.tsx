import CodeComment from '../CodeComment/CodeComment'
import './SectionHeader.scss'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    comment?: string
    id?: string
}

export default function SectionHeader({ title, subtitle, comment, id }: SectionHeaderProps) {
    return (
        <div className="section-header">
            {comment && <CodeComment>{comment}</CodeComment>}
            <h2 id={id} className="section-header__title">
                {title}
            </h2>
            {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
        </div>
    )
}
