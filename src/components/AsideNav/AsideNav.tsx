import type { AsideNavElement } from "@/types"
import IconLink from "../IconLink/IconLink"

export default function AsideNav({ title, links }: AsideNavElement) {
    return (
        <aside aria-labelledby="quick-links" className="aside-nav">
            <h3 id="quick-links" className="aside-nav__title">{title}</h3>
            <ul className="aside-nav__list">
                {links.map((link, index) => (
                    <IconLink key={index} icon={link.icon} text={link.text} link={link.link} />
                ))}
            </ul>
        </aside>
    )
}