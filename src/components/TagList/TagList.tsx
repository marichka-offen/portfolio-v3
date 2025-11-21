import Tag from "../Tag/Tag"
import './TagList.scss'

export default function TagList({ tags }: { tags: string[] }) {
    return (
        <ul className="tag-list">
            {tags.map((tag, index) => (
                <li key={index} className="tag-list__item">
                    <Tag>{tag}</Tag>
                </li>
            ))}
        </ul>
    )
}