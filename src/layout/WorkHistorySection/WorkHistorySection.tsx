import JobBlock from "@/components/JobBlock/JobBlock"
import { jobData } from '../../data/jobs'
import "./WorkHistorySection.scss"

export default function WorkHistorySection() {

    return (
        <section id="work-history" className="work-history-section">
            <h2>Work History</h2>

            <ul>
                {jobData.map((job, index) => (
                    <JobBlock key={index} job={job} />
                ))}
            </ul>
        </section >
    )
}