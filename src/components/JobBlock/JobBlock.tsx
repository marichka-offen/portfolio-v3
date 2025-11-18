import type { JobData } from "@/types"
import './JobBlock.scss'
import Tag from "../Tag/Tag"

export default function JobBlock({ job }: { job: JobData }) {
    const { title, time, position, description } = job

    return (
        <li className="job-block">
            <div className="job-block__header">
                <p className="job-block__title">{title}</p>
                <p className="job-block__time">{time}</p>
            </div>

            <div className="job-block__body">
                <div>
                    <h3 className="job-block__position">{position}</h3>
                    <ul className="job-block__tags">
                        {job.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </ul>
                </div>
                <div className="job-block__description" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </li>
    )
}