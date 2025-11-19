import type { IconLink } from '@/types'
import './IconLink.scss'

export default function IconLink({ icon, text, link }: IconLink) {
    return (
        <li className='icon-link'>
            <img className="icon-link__icon" src={icon} alt="" tabIndex={-1} />
            <span className='screenreader'>Follow this link to</span>
            <a href={link} className="icon-link__text">{text}</a>
        </li>
    )
}