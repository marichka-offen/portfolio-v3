import Tag from "../Tag/Tag"
import './TagTicker.scss'



export default function TagTicker({ tags }: { tags: string[] }) {
    const midpoint = Math.ceil(tags.length / 2)

    const topTags = tags.slice(0, midpoint)
    const bottomTags = tags.slice(midpoint)
    const loopTop = [...topTags, ...topTags, ...topTags, ...topTags]
    const loopBottom = [...bottomTags, ...bottomTags, ...bottomTags, ...bottomTags]

    return (
        <div className="tag-ticker">
            {/* Row 1 */}
            <div className="tag-ticker__row tag-ticker__row--top">
                <ul className="tag-ticker__list tag-ticker__list--top">
                    {loopTop.map((tag, index) => (
                        <li key={`top-${index}`} className="tag-ticker__item">
                            <Tag>{tag}</Tag>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Row 2 */}
            <div className="tag-ticker__row tag-ticker__row--bottom">
                <ul className="tag-ticker__list tag-ticker__list--bottom">
                    {loopBottom.map((tag, index) => (
                        <li key={`bottom-${index}`} className="tag-ticker__item">
                            <Tag>{tag}</Tag>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}