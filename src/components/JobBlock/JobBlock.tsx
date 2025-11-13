import type { JobData } from "@/types"
import './JobBlock.scss'

export default function JobBlock({ job }: { job: JobData }) {
    const { title, time, position, description } = job

    return (
        <li className="job-block">
            <div className="job-block__header">
                <p className="job-block__title">{title}</p>
                <p className="job-block__time">{time}</p>
            </div>

            <div className="job-block__body">
                <h3 className="job-block__position">{position}</h3>
                <p className="job-block__description" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </li>
    )
}