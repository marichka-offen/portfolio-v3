import type { ProjectData } from "@/types"
import './ProjectCard.scss'
import { Link } from "react-router-dom"
import TagList from "../TagList/TagList"
import TagTicker from "../TagTicker/TagTicker"

export default function ProjectCard({ project }: { project: ProjectData }) {
    const { slug, color, title, icon, tags } = project
    return (
        <Link
            to={`/projects/${slug}`}
            className="project-card__link"
            aria-label={`Read more about ${title}`}
            style={{ "--color": color } as React.CSSProperties}
        >
            <article className="project-card">
                <h3 className="project-card__title">{project.title}</h3>
                <i className={`icon ${icon}`} />
                {/* <TagList tags={tags} /> */}
                <TagTicker tags={tags} />
            </article>
        </Link>
    )
}